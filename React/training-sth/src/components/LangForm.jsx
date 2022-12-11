import React, {useState} from 'react'

const langs= ["Java", "Python", "JavaScript"

]

const LangForm = () => {
    const [selectedLang, setselectedLang] = useState(langs[0]);
    const [isDifficult, setisDifficult] = useState(false);

const   handleSubmit = (e) => {
        e.preventDefault();
        console.log( selectedLang + " is " + (isDifficult? '': "not") + " difficult!");
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <select  value={selectedLang} onChange={e=>setselectedLang(e.target.value)}>
                {
langs.map((lang, id) => <option key={id} value={lang}>{lang} </option>)
}

            </select>
<p><input type="checkbox" checked={isDifficult}  onChange={e=>setisDifficult(e.target.checked)} />Is it difficult?</p>
            <button>Choose you poison!</button>
        </form>
      
    </div>
  )
}

export default LangForm
