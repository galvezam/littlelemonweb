
const meta = {
    title: 'Little Lemon',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
        el: {
            content: 'Get all your sports fishing equipment at One Place Fishing. Open Monday to Friday, 9 to 5, in the Great Lake area'
        } 
    }
}

const metaTags () => {
    return (
        <DocumentMeta {...meta} />
    )
}
export default metaTags;