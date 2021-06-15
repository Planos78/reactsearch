import './App.css';
import AppHeader from './components/AppHeader'
import TattooItem from './components/TatooItem'
import TattooPost from './components/TattooPost'
import tattoos from './data/tattoos'
import Search from './components/Search'
import React, { useState } from 'react'

function App() {

    const [selectedTattoo, setSelectedTattoo] = useState(null)
    const [searchText, setSearchText] = useState('')

    function onTattooOpenClick(tattoo) {
        setSelectedTattoo(tattoo)
    }

    function onTattooCloseClick() {
        setSelectedTattoo(null)
    }
    function onChangeSearch(e) {
        setSearchText(e.target.value)
    }

    let tattooPost = null
    if (!!selectedTattoo) {
        tattooPost = <TattooPost selectedTattoo={selectedTattoo} onBgClick={onTattooCloseClick} />
    }

    return (
        <div className="App">
            <AppHeader />
            <section className='app-section'>
                <div className='app-container'>
                    <Search searchText={searchText} onChangeSearch={onChangeSearch} />
                    <div className='app__grid'>
                        {tattoos.filter((tattoo) => {
                            return tattoo.title.includes(searchText)
                        }).map((item, index) => <TattooItem tattoo={item} key={index} onTattooClick={onTattooOpenClick} />)}
                    </div>
                </div>
            </section>
            {tattooPost}
        </div>
    );
}

export default App;
