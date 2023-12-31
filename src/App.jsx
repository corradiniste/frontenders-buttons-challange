import './App.css'
import MyButton from "./components/ButtonSettings.jsx";

function App() {
    return (
        <>
            <h1>SIZES</h1>
            <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
                <MyButton>
                    SMALL
                </MyButton>
                <MyButton size="Medium">
                    MEDIUM
                </MyButton>
                <MyButton size="Large">
                    LARGE
                </MyButton>
            </div>
            <h1>BORDERS</h1>
            <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
                <MyButton>
                    NORMAL
                </MyButton>
                <MyButton borders="Squared">
                    SQUARED
                </MyButton>
                <MyButton borders="Rounded">
                    ROUNDED
                </MyButton>
            </div>
            <h1>STATES</h1>
            <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
                <MyButton buttonDisabled={true}>
                    DISABLED
                </MyButton>
                <MyButton state="Loading">
                    LOADING
                </MyButton>
            </div>
        <h1>COLOR STATES</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Normal" border="Normal" colorButtonText="Black">
                NORMAL
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Primary" border="Primary" colorButtonText="White">
                PRIMARY
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Link" border="Link" colorButtonText="White">
                LINK
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Info" border="Info" colorButtonText="White">
                INFO
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Success" border="Success" colorButtonText="White">
                SUCCESS
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Warning" border="Warning" colorButtonText="White">
                WARNING
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Danger" border="Danger" colorButtonText="White">
                DANGER
            </MyButton>
        </div>
        <h1>COLOR OUTLINE STATES</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Normal" border="Normal" colorButtonText="Black">
                NORMAL
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Normal" border="Primary" colorButtonText="Primary">
                PRIMARY
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Normal" border="Link" colorButtonText="Link">
                LINK
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Normal" border="Info" colorButtonText="Info">
                INFO
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Normal" border="Success" colorButtonText="Success">
                SUCCESS
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Normal" border="Warning" colorButtonText="Warning">
                WARNING
            </MyButton>
            <MyButton size="Normal" borders="Normal" state="Disabled" backgroundColor="Normal" border="Danger" colorButtonText="Danger">
                DANGER
            </MyButton>
        </div>
        <h1>ICONS</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <MyButton size="Normal" borders="Rounded" state="Disabled" backgroundColor="Primary" border="Primary" colorButtonText="Normal" iconLeft={true}>
                ICON LEFT
            </MyButton>
            <MyButton size="Normal" borders="Rounded" state="Disabled" backgroundColor="Info" border="Info" colorButtonText="Normal" iconRight={true}>
                ICON RIGHT
            </MyButton>
            <MyButton size="Normal" borders="Rounded" state="Disabled" backgroundColor="Primary" border="Primary" colorButtonText="Primary" iconSuccess={true}>
            </MyButton>
        </div>
    </>
  )
}

export default App
