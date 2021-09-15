import Breadcrumb from "../../components/Breadcrumb";

const Flowchart = () => {

    const boxStyle = "px-4 py-2 flex items-center justify-center bg-green-600 rounded-md "
    const verticalBoxStyle = " my-2 w-72"
    const horizontalBoxStyle = " mx-2 w-30 max-w-sm"
    const titleStyle = "text-lg font-bold uppercase antialiased tracking-wide text-white drop-shadow-sm "

    const items = [
        {
            title: "Distrust in all claims",
            subtitle: "I lost my trust in everyone. Family, parents, friends, government, media, scientists, spiritual leaders. I could not find a fair person to listen to and trust. Thus I had to become the change I wish I could see in the world."
        },
        {
            title: "Becoming zero",
            subtitle: "I put aside all I believe. I build from the ground again. I promised myself to seek the truth, as long as I breath."
        },
        "Observation, thought, impartiality",
        [
            "Nature vs human design",
            "Life & death",
            "Claims analysis",
            "Human's strenghts and weaknesses"
        ],
        "Nature > human design => nature is designed",
        "Inductive logic => separation of design and designer(s)",
        "Design complexity => huge power and knowledge of the designer(s)",
        "Natural laws's constancy => One will, one designer",
        "One designer + Existence of evil => evil is designed by the designer",
        "Source of good and evil",
        "Knowing no more about the designer",
        [
            "Leave at this point",
            "Search for the designer => abductive reasoning"
        ],
        [
            "Deism (designer has abandoned the design) => a possibility",
            "Claim of contacting the designer => I know it's not the case",
            "Asking others => abductive reasoning"
        ],
        ""
    ];

    const renderItem = (item) => <>
        {
            item.title ?
                <div>
                    <div className={titleStyle + " mb-2"}>{item.title}</div>
                    <span className="text-sm text-gray-900">{item.subtitle}</span>
                </div>
                :
                <span className={titleStyle}>{item}</span>
        }
    </>

    return <>
        <Breadcrumb urlSegments={['path', 'flowchart']} />
        <div className="flex items-center justify-center flex-col">
            {
                items.map((item, index) => <div key={index}>
                    {
                        Array.isArray(item)
                            ?
                            <div className="flex flex-row w-full my-2 ">
                                {
                                    item.map(((subItem, index) =>
                                        <span className={boxStyle + horizontalBoxStyle} key={index}>
                                            {
                                                renderItem(subItem)
                                            }
                                        </span>
                                    ))
                                }
                            </div>
                            :
                            <div className={boxStyle + verticalBoxStyle}>
                                {
                                    renderItem(item)
                                }
                            </div>
                    }
                </div>)
            }
        </div>
    </>
}

export default Flowchart;