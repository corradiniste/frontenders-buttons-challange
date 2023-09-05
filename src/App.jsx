import './App.css'
import ButtonSizeSmall from "./components/Sizes/ButtonSizeSmall.jsx";
import ButtonSizeNormal from "./components/Sizes/ButtonSizeNormal.jsx";
import ButtonSizeMedium from "./components/Sizes/ButtonSizeMedium.jsx";
import ButtonSizeLarge from "./components/Sizes/ButtonSizeLarge.jsx";
import NormalBorder from "./components/Borders/NormalBorder.jsx";
import SquaredBorder from "./components/Borders/SquaredBorder.jsx";
import RoundedBorder from "./components/Borders/RoundedBorder.jsx";
import DisabledState from "./components/States/DisabledState.jsx";
import LoadingState from "./components/States/LoadingState.jsx";
import ColorStateNormal from "./components/ColorStates/ColorStateNormal.jsx";
import ColorStatePrimary from "./components/ColorStates/ColorStatePrimary.jsx";
import ColorStateLink from "./components/ColorStates/ColorStateLink.jsx";
import ColorStateInfo from "./components/ColorStates/ColorStateInfo.jsx";
import ColorStateSuccess from "./components/ColorStates/ColorStateSuccess.jsx";
import ColorStateWarning from "./components/ColorStates/ColorStateWarning.jsx";
import ColorStateDanger from "./components/ColorStates/ColorStateDanger.jsx";
import ColorStateOutlineDanger from "./components/ColorOutlineStates/ColorStateOutlineDanger.jsx";
import ColorStateOutlineInfo from "./components/ColorOutlineStates/ColorStateOutlineInfo.jsx";
import ColorStateOutlineLink from "./components/ColorOutlineStates/ColorStateOutlineLink.jsx";
import ColorStateOutlineNormal from "./components/ColorOutlineStates/ColorStateOutlineNormal.jsx";
import ColorStateOutlinePrimary from "./components/ColorOutlineStates/ColorStateOutlinePrimary.jsx";
import ColorStateOutlineSuccess from "./components/ColorOutlineStates/ColorStateOutlineSuccess.jsx";
import ColorStateOutlineWarning from "./components/ColorOutlineStates/ColorStateOutlineWarning.jsx";
import IconLeftButton from "./components/Icons/IconLeftButton.jsx";
import IconRightButton from "./components/Icons/IconRightButton.jsx";
import IconSuccess from "./components/Icons/IconSuccess.jsx";

function App() {

  return (
    <>
        <h1>SIZES</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <ButtonSizeSmall buttonText="SMALL" />
            <ButtonSizeNormal buttonText="NORMAL" />
            <ButtonSizeMedium buttonText="MEDIUM" />
            <ButtonSizeLarge buttonText="LARGE" />
        </div>
        <h1>BORDERS</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <NormalBorder buttonText="NORMAL" />
            <SquaredBorder buttonText="SQUARED" />
            <RoundedBorder buttonText="ROUNDED" />
        </div>
        <h1>STATES</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <DisabledState buttonText="DISABLED" />
            <LoadingState buttonText="Loading..." />
        </div>
        <h1>COLOR STATES</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <ColorStateNormal buttonText="NORMAL" />
            <ColorStatePrimary buttonText="PRIMARY" />
            <ColorStateLink buttonText="LINK" />
            <ColorStateInfo buttonText="INFO" />
            <ColorStateSuccess buttonText="SUCCESS" />
            <ColorStateWarning buttonText="WARNING" />
            <ColorStateDanger buttonText="DANGER" />
        </div>
        <h1>COLOR OUTLINE STATES</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <ColorStateOutlineNormal buttonText="NORMAL" />
            <ColorStateOutlinePrimary buttonText="PRIMARY" />
            <ColorStateOutlineLink buttonText="LINK" />
            <ColorStateOutlineInfo buttonText="INFO" />
            <ColorStateOutlineSuccess buttonText="SUCCESS" />
            <ColorStateOutlineWarning buttonText="WARNING" />
            <ColorStateOutlineDanger buttonText="DANGER" />
        </div>
        <h1>ICONS</h1>
        <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gap: '10px', alignItems: 'center' }}>
            <IconLeftButton buttonText="ICON LEFT" />
            <IconRightButton buttonText="ICON RIGHT" />
            <IconSuccess />
        </div>
    </>
  )
}

export default App
