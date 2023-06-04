import './App.css'
import * as chroma from "chroma-js";

function color_contrast(color1: chroma.Color, color2: chroma.Color) {
    var lum1 = color1.luminance();
    var lum2 = color2.luminance();
    if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
    }

    return (lum2 + 0.05) / (lum1 + 0.05);
}

function Table(props) {
    let fg: chroma.Color[];
    let bg: chroma.Color[];

    fg = props.fg;
    bg = props.bg;

    return (
        <div className={'rounded-xl border border-gray-200 pb-2'}>
            <h1 className={'mt-8 mb-4 text-xl text-center'}>{props.title}</h1>
            <table className={"w-full "}>
                <tr>
                    <td></td>
                    <td></td>
                    {
                        Object.entries(bg).map(function ([name, bgColor], i) {
                            return <>
                                <td style={{
                                    backgroundColor: bgColor.hex(),
                                    color: bgColor.luminance() < 0.5 ? '#fff' : '#000'
                                }}
                                    colSpan={2}>
                                    <code>{name}</code>
                                </td>
                            </>
                        })
                    }
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    {
                        Object.entries(bg).map(function ([name, bgColor], i) {
                            return <>
                                <td style={{
                                    backgroundColor: bgColor.hex(),
                                    color: bgColor.luminance() < 0.5 ? '#fff' : '#000'
                                }}
                                    colSpan={2}>
                                    <code>{bgColor.hex()}</code>
                                </td>
                            </>
                        })
                    }
                </tr>
                {fg.map(function (object, i) {

                    return (
                        <tr>
                            <td><code>{`rotation${i}`}</code></td>
                            <td style={{backgroundColor: object.hex()}}><code>{object.hex()}</code></td>

                            {
                                Object.entries(bg).map(function ([name, bgColor]) {
                                    let contrast = color_contrast(object, bgColor);

                                    var score = '';
                                    if (contrast < 3.0) {
                                        score = '❌';
                                    } else if (contrast < 4.5) {
                                        score = '⚠\ufe0f'
                                    }

                                    return <>
                                        <td style={{backgroundColor: bgColor.hex(), color: object.hex()}}>
                                            <code>{contrast.toFixed(2)}</code>
                                        </td>
                                        <td style={{
                                            backgroundColor: bgColor.hex(),
                                            color: object.hex(),
                                            fontFamily: 'bl'
                                        }}>{score}</td>
                                    </>
                                })
                            }
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

function App() {
    var proposed = [
        chroma('rgb(205,82,82)'),
        chroma('rgb(205,164,82)'),
        chroma('rgb(164,205,82)'),
        chroma('rgb(82,205,82)'),
        chroma('rgb(82,205,164)'),
        chroma('rgb(82,164,205)'),
        chroma('rgb(82,82,205)'),
        chroma('rgb(164,82,205)'),
        chroma('rgb(205,82,164)'),
    ];

    const current = [
        chroma('magenta'),
        chroma('cyan'),
        chroma('rgb(0, 212, 0)'),
        chroma('red'),
        chroma('rgb(103, 106, 255)'),
        chroma('lightpink'),
        chroma('lightcyan'),
        chroma('lightgreen'),
        chroma('grey'),
    ];

    const spectrum = [
        chroma("00B8AF"),
        chroma('3F46D2'),
        chroma('FF7D00'),
        chroma('F22483'),
        chroma('7D84FF'),
        chroma('37E357'),

        chroma('007CFB'),
        chroma('7D1EDB'),
        chroma('EFC400'),
        chroma('DB5400'),
        chroma('009258'),
        chroma('B0EB00'),
    ];

    let bg = {
        Dark: chroma('#161618'),
        Light: chroma('#fdfcfd'),
    }

    const carbonLight = [
        chroma("#6929c4"),
        chroma("#1192e8"),
        chroma("#005d5d"),
        chroma("#9f1853"),
        chroma("#fa4d56"),
        chroma("#570408"),
        chroma("#198038"),
        chroma("#002d9c"),
        chroma("#ee538b"),
        chroma("#b28600"),
        chroma("#009d9a"),
        chroma("#012749"),
        chroma("#8a3800"),
        chroma("#a56eff"),
    ];

    const carbonDark = [
        chroma("#8a3ffc"),
        chroma("#33b1ff"),
        chroma("#007d79"),
        chroma("#ff7eb6"),
        chroma("#fa4d56"),
        chroma("#fff1f1"),
        chroma("#6fdc8c"),
        chroma("#4589ff"),
        chroma("#d12771"),
        chroma("#d2a106"),
        chroma("#08bdba"),
        chroma("#bae6ff"),
        chroma("#ba4e00"),
        chroma("#d4bbff"),
    ]

    let Plotly = [
         chroma("#636EFA"),
         chroma("#EF553B"),
         chroma("#00CC96"),
         chroma("#AB63FA"),
         chroma("#FFA15A"),
         chroma("#19D3F3"),
         chroma("#FF6692"),
         chroma("#B6E880"),
         chroma("#FF97FF"),
         chroma("#FECB52"),
    ]

    let D3 = [
         chroma("#1F77B4"),
         chroma("#FF7F0E"),
         chroma("#2CA02C"),
         chroma("#D62728"),
         chroma("#9467BD"),
         chroma("#8C564B"),
         chroma("#E377C2"),
         chroma("#7F7F7F"),
         chroma("#BCBD22"),
         chroma("#17BECF"),
    ]
    let G10 = [
         chroma("#3366CC"),
         chroma("#DC3912"),
         chroma("#FF9900"),
         chroma("#109618"),
         chroma("#990099"),
         chroma("#0099C6"),
         chroma("#DD4477"),
         chroma("#66AA00"),
         chroma("#B82E2E"),
         chroma("#316395"),
    ]
    let T10 = [
         chroma("#4C78A8"),
         chroma("#F58518"),
         chroma("#E45756"),
         chroma("#72B7B2"),
         chroma("#54A24B"),
         chroma("#EECA3B"),
         chroma("#B279A2"),
         chroma("#FF9DA6"),
         chroma("#9D755D"),
         chroma("#BAB0AC"),
    ]
    let Dark2 = [
         chroma("rgb(27,158,119)"),
         chroma("rgb(217,95,2)"),
         chroma("rgb(117,112,179)"),
         chroma("rgb(231,41,138)"),
         chroma("rgb(102,166,30)"),
         chroma("rgb(230,171,2)"),
         chroma("rgb(166,118,29)"),
         chroma("rgb(102,102,102)"),
    ]

    return <div className={'grid gap-4'}>
        <div className={'grid grid-cols-2 gap-4'}>
            <Table title={'Current'} fg={current} bg={bg}/>
            <Table title={'Proposed'} fg={proposed} bg={bg}/>
        </div>
        <div className={'grid grid-cols-2 gap-4'}>
            <Table title={'Plotly'} fg={Plotly} bg={bg}/>
            <Table title={'G10'} fg={G10} bg={bg}/>
            <Table title={'D3'} fg={D3} bg={bg}/>
            <Table title={'T10'} fg={T10} bg={bg}/>
            <Table title={'Dark2'} fg={Dark2} bg={bg}/>
        </div>
        <div className={'grid grid-cols-2 gap-4'}>
            <Table title={'Adobe Spectrum'} fg={spectrum} bg={bg}/>
        </div>
        <div className={'grid grid-cols-2 gap-4'}>
            <Table title={'IBM Carbon (Light)'} fg={carbonLight} bg={bg}/>
            <Table title={'IBM Carbon (Dark)'} fg={carbonDark} bg={bg}/>
        </div>
    </div>


}

export default App
