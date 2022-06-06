import React from "react";

export type useDebounceProps = {
  value?: string;
  delay?: number;
  onDebounce?: (value: string) => void;
  enabled?: boolean;
};

const useDebounce = ({
  value = "",
  delay = 500,
  onDebounce,
  enabled = true,
}: useDebounceProps) => {
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const [shouldTrigger, setShouldTrigger] = React.useState(enabled);
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    setShouldTrigger(enabled);
    if (enabled) {
      setDebouncedValue(value);
    }
  }, [enabled]);

  React.useEffect(() => {
    if (shouldTrigger && value !== debouncedValue) {
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(value);
        onDebounce?.(value);
      }, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shouldTrigger, value, delay, onDebounce]);

  return debouncedValue;
};

export default useDebounce;
