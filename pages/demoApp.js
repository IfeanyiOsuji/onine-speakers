


export default function Demo({useState}){
    const [text1, settext1] = useState('first');
    const [text2, settext2] = useState('second');

    function onTextChange(e){
        e.target.id === 'text1' ? settext1(e.target.value) : settext2(e.target.value)

    }

return (

    <div className="container">
        <h3>Simple state and life cycle management</h3>
        <input type="text" value={text1} onChange={onTextChange} id="text1"/>
        <hr />
        <input type="text" value={text2} onChange={onTextChange} id="text2"/>
        <hr />
        <h2>
            {`${text1} : ${text2}`}
        </h2>
    </div>
)
}