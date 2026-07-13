import React from 'react'

function SettingsTab() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>settings.json</h2>
        <p className={styles.subtitle}>User settings and theme configurations.</p>
      </div>

      <div className={styles.interactivePanel}>
        <pre className={styles.codeBlock}>
{`{
  "editor.theme": "Notion Minimal Grey",
  "editor.tabSize": 2,
  "editor.fontSize": 13,
  "editor.fontFamily": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas",
  "editor.lineNumbers": "on",
  "editor.minimap.enabled": false,
  "redux.playground.status": "initialized"
}`}
        </pre>
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
  codeBlock: "font-mono text-xs text-[#7c7b77] dark:text-neutral-400 whitespace-pre overflow-x-auto"
}

export default SettingsTab
