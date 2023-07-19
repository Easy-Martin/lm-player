import { useMemoizedFn, useSafeState } from 'ahooks';
import { isFunction, isObjectLike } from 'lodash-es';
import React, { useMemo } from 'react';

function useSimpleState<T>(s: T) {
  const [state, setState] = useSafeState(s);
  const stateChange = useMemoizedFn((d: Partial<T>) => setState((old) => ({ ...old, ...d })));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isObject = useMemo(() => isObjectLike(s) || (isFunction(s) && isObjectLike(s())), []);

  const result = useMemo(
    () => [state, isObject ? stateChange : setState, setState] as [T, (data: Partial<T>) => void, React.Dispatch<React.SetStateAction<T>>],
    [isObject, setState, state, stateChange],
  );
  return result;
}

export default useSimpleState;
