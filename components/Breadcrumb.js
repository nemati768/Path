const Breadcrumb = ({ urlSegments }) => {
    let url = "";
    let items = [];
    for (let i = 0; i < urlSegments.length - 1; i++) {
        if (urlSegments[i] == 'index') {
            continue;
        }
        url = url + '/' + urlSegments[i];
        items.push({
            url: url,
            text: urlSegments[i].split('-').map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(' ')
        })
    }
    return <div className='breadcrumb h-20 flex items-center pl-5'>
        <div>
            <a href="/">Home</a><span className="px-2">&gt;</span>
            {
                items.map(i => <span key={i.url}>
                    <a href={i.url + '/index'}>{i.text}</a><span className="px-2">&gt;</span></span>)
            }
        </div>
    </div>
}

export default Breadcrumb;
