import { useState, useEffect, useCallback } from 'react';

export const useEffectIf = (effect, dependencies = [], condition) => {
  return useEffect(() => {
    if (condition === true) {
      effect();
    }
  }, dependencies.concat([condition]));
};

export const useCallbackIf = (callback, dependencies = [], condition) => {
  return useCallback(() => {
    if (condition === true) {
      callback();
    }
  }, dependencies.concat([condition]));
};

export const useAsyncEffect = (effect, dependencies) => {
  return useEffect(() => {
    effect();
  }, dependencies);
};

export const useAsyncEffectIf = (effect, dependencies = [], condition) => {
  return useAsyncEffect(async () => {
    if (condition === true) {
      effect();
    }
  }, dependencies.concat([condition]));
};

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);

  const toggle = useCallback(() => setState(!state), [state])

  return [state, toggle];
};

export const useBool = (initial = false) => {
  const [state, setState] = useState(initial);

  const setTrue = useCallback(() => setState(true));
  const setFalse = useCallback(() => setState(false));

  return [state, setTrue, setFalse];
};

