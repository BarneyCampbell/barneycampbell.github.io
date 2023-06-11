import { ReactNode, useState } from "react";
import './styles/Home.css'

export default function Home() {
    return (
        <>
            <h1 className="title">Barney Campbell</h1>
            <div className="page-flex">
                {/* <div className="card-container"> */}
                    {/* <button id="cardBack">←</button> */}
                    <Card id='intro' title='Me' hidden={false} link="" paras={['I\'m Barney, a Computer Science (almost) graduate.', 'This website is the home of all my projects and other things I\'ve gotten up to. The arrows will take you to new cards where you can explore my currently public projects.']} />
                    <Card id='racetrack' title='Racetrack' hidden={false} link="https://racetrack-94772.web.app/" linkTarget={Target.New} paras={['For my final year project I implemented racetrack. This is a scientific game that\'s been around for 60 years!', 'The project involved implementing the game then creating algorithms to solve the game.', 'Click me to try!']} />
                    <Card id='blog' title='Blog' hidden={false} link="./blog" linkTarget={Target.Here} paras={['Sometimes I write things. If you\'d like to read these things, find them here.']} />
                    <Card id='github' title='GitHub' hidden={false} link="https://github.com/barneycampbell" linkTarget={Target.New} paras={['If you\'re interested in what I get up to, have a browse!']} />

                    {/* <div className="card hidden" id="dev-card">
                        <h4>My <a href="https://daily.dev">daily.dev</a> card</h4>
                        <a href="https://app.daily.dev/barney"><img src="https://api.daily.dev/devcards/b4bf461769eb483b833ecb6313fc04e9.png?r=vvd" width="150" alt="Barney Campbell's Dev Card"/></a>
                    </div> */}
                    {/* <button id="cardForward">→</button> */}
                {/* </div> */}
            </div>
        </>
    )
}

function Card(props: { id: string, title: string, paras: Array<string>, link: string, linkTarget?: Target, hidden: boolean}) {
    // const [hidden, changeVisibility] = useState(props.hidden);
    const [hidden, _] = useState(props.hidden);

    const content: Array<ReactNode> = []

    props.paras.forEach((p: string, index: number) => {
        content.push(<p key={index}>{p}</p>);
    })

    return (
        <div className={["card", (hidden) ? 'hidden' : ''].join(' ')} id={props.id} onClick={() => openLink(props.link, (props.linkTarget !== undefined) ? props.linkTarget : Target.None)}>
            <h4>{props.title}</h4>
            { content }
        </div>
    )
}

enum Target {
    Here = "_self",
    New = "_blank",
    None = ""
}

function openLink(link: string, target: Target) {
    if(link === "" || target == Target.None) { return }
    window.open(link, target);
} 