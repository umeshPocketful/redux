import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementAsync } from '../store/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Counter</h2>
        <p className={styles.subtitle}>Your count is {count}</p>
      </div>

      <div className={styles.interactivePanel}>
        <p className={styles.title}>
          {count}
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button className={styles.btn} onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button className={styles.btn} onClick={() => dispatch(reset())}>
            Reset
          </button>
          <button className={styles.btn} onClick={() => dispatch(incrementAsync({val1: 333, val2: 100}))}>
            Increment Async
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: "flex flex-col gap-4 font-sans text-sm",
  header: "border-b border-[#e9e9e6] dark:border-[#2d2d2d] pb-3 mb-4",
  title: "text-xl font-semibold text-[#37352f] dark:text-neutral-100",
  subtitle: "text-xs text-[#7c7b77] dark:text-neutral-400 mt-1",
  interactivePanel: "border border-[#e9e9e6] dark:border-[#2d2d2d] bg-[#f7f7f5] dark:bg-[#202020] p-4 flex flex-col gap-3",
  description: "text-[13px] leading-relaxed text-[#37352f] dark:text-neutral-300",
  btn: "bg-white dark:bg-[#191919] text-[#37352f] dark:text-neutral-200 border border-[#e9e9e6] dark:border-[#2d2d2d] px-3 py-1.5 text-xs font-medium cursor-pointer hover:bg-[#eaeae6] dark:hover:bg-[#141414] active:bg-[#e9e9e6] dark:active:bg-[#2d2d2d] inline-flex items-center justify-center select-none",
  btnContainer: "flex gap-4"
}

export default Counter
