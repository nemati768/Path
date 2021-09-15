import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from 'next/router'

const Flowchart = () => {

    const router = useRouter()

    const goTo = (item) => {
        router.push(item);
    }

    const boxStyle = "px-4 py-2 flex items-start justify-center bg-green-600 rounded-md "
    const verticalBoxStyle = " my-2"
    const horizontalBoxStyle = " mx-2 my-2 "
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
        {
            title: "Observation, thought, impartiality",
            subtitle: "I should spend time and energy. Laziness is no excuse for finding the truth. To gain, once must spend."
        },
        [
            {
                title: "Nature vs human design",
                subtitle: "I am an engineer. I will compare what I see in the nature, with what we humans have created. I make a list. Then abductively decide wheather the world is designed or not.",
                url: "/path/design/index"
            },
            {
                title: "Life & death",
                subtitle: "I find definitions. And I learn from them."
            }
        ],
        {
            title: "Nature is designed",
            subtitle: "It's my personal truth. I can't prove it to others. But I have come to the conclusion that nature is designed. Because nature has designs that are superior to intelligent human's design. Nature > human design => nature is designed."
        },
        {
            title: "Separation of design and designer(s)",
            subtitle: "It's an inductive reasoning. I can't find even one example where the desig is the designer itself. Design is not the designer."
        },
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

    const renderItem = (item) => <div className="w-64" onClick={() => goTo(item.url)}>
        {
            item.title ?
                <div>
                    <div className={titleStyle + " mb-2"}>{item.title}</div>
                    <span className="text-sm text-gray-900">{item.subtitle}</span>
                </div>
                :
                <span className={titleStyle + " text-center "}>{item}</span>
        }
    </div>

    return <>
        <Breadcrumb urlSegments={['path', 'flowchart']} />
        <div className="flex items-center justify-center flex-col">
            {
                items.map((item, index) => <div key={index}>
                    {
                        Array.isArray(item)
                            ?
                            <div className="flex border-2 rounded-md flex-col lg:flex-row bg-gray-100">
                                {
                                    item.map(((subItem, index) =>
                                        <div className={boxStyle + horizontalBoxStyle} key={index}>
                                            {
                                                renderItem(subItem)
                                            }
                                        </div>
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