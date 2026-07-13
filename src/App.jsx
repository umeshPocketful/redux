import React, { useState } from 'react'
import Counter from './components/Counter'
import SettingsTab from './components/SettingsTab'

// Action
const increment = {
  type: "INCREMENT", payLoad: 1
};
const decrement = {
  type: "DECREMENT", payLoad: 1
};
const incrementByTwo = {
  type: "INCREMENT", paylod: 2
}

// Reducers


function App() {
  const [activeTab, setActiveTab] = useState('redux')

  const tabs = [
    { id: 'redux', name: 'Counter.jsx', type: 'js', component: <Counter /> },
    { id: 'settings', name: 'settings.json', type: 'json', component: <SettingsTab /> }
  ]

  const activeTabDetails = tabs.find(tab => tab.id === activeTab) || tabs[0]

  return (
    <div className={styles.appContainer}>
      {/* Title Bar / Header */}
      <header className={styles.titleBar}>
        <span className={styles.titleBarText}>Workspace Explorer — redux-playground</span>
        <div className={styles.titleBarActions}>
          <div className={styles.titleBarDot}></div>
          <div className={styles.titleBarDot}></div>
          <div className={styles.titleBarDot}></div>
        </div>
      </header>

      {/* Main Grid */}
      <div className={styles.mainLayout}>
        {/* Sidebar explorer */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>Explorer</div>
          <ul className={styles.sidebarList}>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={`${styles.sidebarItem} ${activeTab === tab.id ? styles.sidebarItemActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={`${styles.fileIcon} ${tab.type === 'js' ? styles.fileIconJs : styles.fileIconJson}`}>
                  {tab.type === 'js' ? 'JS' : '{}'}
                </span>
                {tab.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Editor Area */}
        <section className={styles.editorViewport}>
          {/* Tab Bar */}
          <div className={styles.tabBar}>
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={`${styles.fileIcon} ${tab.type === 'js' ? styles.fileIconJs : styles.fileIconJson}`}>
                  {tab.type === 'js' ? 'JS' : '{}'}
                </span>
                <span>{tab.name}</span>
                <span className={styles.tabClose}>×</span>
              </div>
            ))}
          </div>

          {/* Active Tab Screen */}
          <div className={styles.activeScreen}>
            {activeTabDetails.component}
          </div>
        </section>
      </div>

      {/* Bottom Status Bar */}
      <footer className={styles.statusBar}>
        <div className={styles.statusBarItem}>
          <span className="inline-block w-1.5 h-1.5 bg-[#61fbcf]"></span>
          <span>Workspace: Active</span>
        </div>
        <div className={styles.statusBarItem}>
          <span>LF</span>
          <span>UTF-8</span>
          <span>JavaScript React</span>
        </div>
      </footer>
    </div>
  )
}

const styles = {
  appContainer: "flex flex-col h-screen w-screen overflow-hidden bg-white dark:bg-[#191919] text-[#37352f] dark:text-neutral-200 font-sans",
  titleBar: "flex items-center justify-between h-[35px] bg-[#f7f7f5] dark:bg-[#202020] border-b border-[#e9e9e6] dark:border-[#2d2d2d] px-4 select-none",
  titleBarText: "text-[11px] font-medium text-[#7c7b77] dark:text-neutral-400",
  titleBarActions: "flex gap-2",
  titleBarDot: "w-2 h-2 bg-[#e9e9e6] dark:bg-[#2d2d2d]",
  mainLayout: "flex flex-1 overflow-hidden",
  sidebar: "w-[220px] bg-[#f7f7f5] dark:bg-[#202020] border-r border-[#e9e9e6] dark:border-[#2d2d2d] flex flex-col select-none",
  sidebarHeader: "px-4 py-2 text-[11px] font-bold tracking-wider uppercase text-[#7c7b77] dark:text-neutral-400 border-b border-[#e9e9e6] dark:border-[#2d2d2d]",
  sidebarList: "list-none py-2 m-0",
  sidebarItem: "px-4 py-1.5 text-xs text-[#37352f] dark:text-neutral-200 cursor-pointer flex items-center gap-2 hover:bg-[#eaeae6] dark:hover:bg-[#141414]",
  sidebarItemActive: "bg-white dark:bg-[#191919] font-medium border-l-2 border-sky-600 pl-3.5 hover:bg-white dark:hover:bg-[#191919]",
  fileIcon: "font-mono text-[10px] font-bold text-purple-400",
  fileIconJs: "text-amber-500",
  fileIconJson: "text-green-500",
  editorViewport: "flex-1 flex flex-col overflow-hidden bg-white dark:bg-[#191919]",
  tabBar: "flex bg-[#f7f7f5] dark:bg-[#202020] border-b border-[#e9e9e6] dark:border-[#2d2d2d] h-[35px] overflow-x-auto",
  tab: "flex items-center gap-2 px-4 h-full text-xs font-mono text-[#7c7b77] dark:text-neutral-400 bg-[#eaeae6] dark:bg-[#141414] border-r border-[#e9e9e6] dark:border-[#2d2d2d] cursor-pointer select-none hover:bg-white dark:hover:bg-[#191919] hover:text-[#37352f] dark:hover:text-neutral-200",
  tabActive: "text-[#37352f] dark:text-neutral-200 bg-white dark:bg-[#191919] !border-b-transparent font-medium",
  tabClose: "text-[10px] text-[#7c7b77] dark:text-neutral-400 opacity-60 hover:opacity-100 ml-1",
  activeScreen: "flex-1 p-6 overflow-y-auto text-sm",
  statusBar: "flex items-center justify-between h-[22px] bg-sky-600 text-white px-3 text-[11px] font-mono select-none",
  statusBarItem: "flex items-center gap-1.5"
}

export default App
