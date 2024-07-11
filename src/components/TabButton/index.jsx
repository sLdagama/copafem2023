function TabButton({ tabName, activeTab, handleChangeTab }) {
    return (
        <button
            className={activeTab === tabName ? 'active' : ''}
            onClick={() => handleChangeTab(tabName)}
          >
            {tabName}
          </button>
    )
}

export default TabButton
