async function likeGo<T, S>(fn: () => Promise<T>): Promise<[T, S]> {
  const result = [] as never as [T, S];
  await fn()
    .then((res: T) => {
      result[0] = res;
    })
    .catch((err: S) => {
      result[1] = err;
    });

  return result;
}

export default likeGo;
