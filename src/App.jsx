import { useState } from 'react';
import './App.css';
import TournamentBracket from './components/TournamentBracket';
import Card from './components/Card'
import TabButton from './components/TabButton';

function App() {
  
  const[activeTab, setActiveTab] = useState('Grupos')

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }
  
  function renderTabContent() {
    switch(activeTab) {
      case 'Finais':
        return <TournamentBracket fase="finais"/>
      case 'Semifinais':
        return <TournamentBracket fase="semifinais"/>
      case 'Quartas':
        return <TournamentBracket fase="quartas"/>
      case 'Oitavas':
        return <TournamentBracket fase="oitavas"/>
      case 'Grupos':
        return <section className='cards'>
                  <Card />
               </section>
    }
  }

  return (
    <>
      <h1>Copa do Mundo Feminina 2023</h1>
      <section className='knockout_table'>
        <div className="tabs">
          <TabButton tabName='Grupos' activeTab={activeTab} handleChangeTab={handleChangeTab}/>
          <TabButton tabName='Oitavas' activeTab={activeTab} handleChangeTab={handleChangeTab}/>
          <TabButton tabName='Quartas' activeTab={activeTab} handleChangeTab={handleChangeTab}/>
          <TabButton tabName='Semifinais' activeTab={activeTab} handleChangeTab={handleChangeTab}/>
          <TabButton tabName='Finais' activeTab={activeTab} handleChangeTab={handleChangeTab}/>
        </div>

        <div className='tab_content'>
          {renderTabContent()}
        </div>

      </section>
    </>
  );
}

export default App;
