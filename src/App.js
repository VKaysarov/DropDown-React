'use strict';

class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', selectedLang: [], langList: [{ id: 0, value: 'Русский' },
                                                          { id: 1, value: 'Английский' },
                                                          { id: 2, value: 'Абхазкий' },
                                                          { id: 3, value: 'Японский' },
                                                          { id: 4, value: 'Китайский' },
                                                          { id: 5, value: 'эскимосский' },
                                                          { id: 6, value: 'эсперанто' },
                                                          { id: 7, value: 'эстонский' },
                                                          { id: 8, value: 'югский' },
                                                          { id: 9, value: 'юкагирский' },
                                                          { id: 10, value: 'якутский' }]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleFocus(event) {
    document.querySelector('#lang').classList.add('show')
    document.querySelector('#selected-lang').classList.add('focus')
    document.querySelector('label > span').classList.add('focus')
  }

  handleSubmit(lang) {
    this.setState((state) => {
      return state.selectedLang.push({
        id: state.selectedLang.length != 0 ? state.selectedLang.length : 0,
        value: lang.value
      })
    })

    const index = this.state.langList.map(lang => lang.id).indexOf(lang.id)

    this.setState((state) => {
      return state.langList.splice(index, 1)
    })

    this.setState({value: ""})

    document.querySelector('#lang').classList.remove('show')
    document.querySelector('#selected-lang').classList.remove('focus')
    document.querySelector('label > span').classList.remove('focus')

  }

  handleDelete(item) {
    const index = this.state.selectedLang.map(lang => lang.id).indexOf(item.id)

    this.setState((state) => {
      return state.selectedLang.splice(index, 1)
    })

    this.setState((state) => {
      return state.langList.push({
        id: state.langList.length != 0 ? state.langList.length : 0,
        value: item.value
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="dropdown">
        <span>Выберите язык:</span> 
        <div id="selected-lang">
          <SelectedList handleDelete={this.handleDelete} list={this.state.selectedLang} />
          <input type="text" id="dropdown" value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} />
        </div>
        </label>
        <DataList handleSubmit={this.handleSubmit} value={this.state.value} langList={this.state.langList} />
      </form>
    );
  }
}


// Выбранные языки
function SelectedList(props) {
  function handleClick(item, e) {
    props.handleDelete(item);
  }

  const langList = props.list.map((item) =>
    <div key={item.id}>{item.value} <span onClick={(e) => handleClick(item, e)}>✖</span></div>
  )

  return <div>{langList}</div>
}

// Список языков
function DataList(props) {
  function handleClick(item, e) {
    props.handleSubmit(item);
  }


  let variable = []
  let filterVariable = []
  const re = new RegExp('^' + props.value + '', 'i');

  for (let i = 0; i < props.langList.length - 1; i++) {
    let item_lang = props.langList[i]
    if (re.test(item_lang.value)) {
      filterVariable.push(item_lang)
    }
  }

  // const filterVariable = variable.filter((item) => re.test(item))
                    
  const listItems = filterVariable.map((item) =>
    <div key={item.id} onClick={(e) => handleClick(item, e)}>{item.value}</div>
  )

  return <div id="lang">{listItems}</div>
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<NameForm />, domContainer);


