// https://github.com/streamich/react-use/blob/master/src/useDebounce.ts

import { type DependencyList, useEffect } from 'react';
import useTimeoutFn from './useTimeoutFn';

export type UseDebounceReturn = [() => boolean | null, () => void];

export default function useDebounce(
  fn: (...args: unknown[]) => void,
  ms: number = 0,
  deps: DependencyList = [],
): UseDebounceReturn {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms);

  // biome-ignore lint/correctness/useExhaustiveDependencies: deps is intentionally dynamic
  useEffect(reset, deps);

  return [isReady, cancel];
}
