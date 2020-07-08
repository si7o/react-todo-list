import React, { useState, useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'
import { TODOS_TOGGLE_API } from '../../context/TodosActionTypes'

import './TodosSettings.scss'

export default function TodosSettings() {
    const [showSettings, setShowSettings] = useState(false)
    const {todosStore, todosDispatch} = useContext(TodosContext)

    const handleExternalApiCheck = () => {
        setShowSettings(false)
        todosDispatch({type: TODOS_TOGGLE_API})
    }

    const settingsModal = showSettings && (
        <div className="settings-modal">
            <h3>Settings</h3>
            <input type="checkbox" id="useExternalApi" value="external" checked={todosStore.useExternalApi}  onChange={handleExternalApiCheck}/>
            <label htmlFor="useExternalApi">Load ToDo(s) from external API</label>
        </div>
    )

    const toggleSettingsWindow = () => setShowSettings(!showSettings)

    return (
        <div className="settings">
            <button onClick={toggleSettingsWindow} alt="settings" title="settings">&#x2699;</button>
            {settingsModal}
        </div>
    )
}
