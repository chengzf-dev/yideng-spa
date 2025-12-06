import { useState, useCallback } from 'react';
import type { Draft } from "immer";
import { produce, freeze } from 'immer';

export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = S | DraftFunction<S>;
export type ImmerHook<S> = [S, (updater: Updater<S>) => void];
export function useImmer<S = unknown>(initialValue: S | (() => S)): ImmerHook<S>;
export function useImmer<T>(initialValue: T) {
    const [val, updateVal] = useState(() => freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true));
    return [val, useCallback((updater: T | DraftFunction<T>) => {
        if (typeof updater === 'function') {
            updateVal(produce(updater as DraftFunction<T>))
        } else {
            updateVal(updater);
        }
    }, [])]
}