'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameForm = function (_React$Component) {
  _inherits(NameForm, _React$Component);

  function NameForm(props) {
    _classCallCheck(this, NameForm);

    var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

    _this.state = { arrowIndex: 0, value: '', selectedLang: [], langList: [{ id: 0, value: 'Русский' }, { id: 1, value: 'Английский' }, { id: 2, value: 'Абхазкий' }, { id: 3, value: 'Японский' }, { id: 4, value: 'Китайский' }, { id: 5, value: 'эскимосский' }, { id: 6, value: 'эсперанто' }, { id: 7, value: 'эстонский' }, { id: 8, value: 'югский' }, { id: 9, value: 'юкагирский' }, { id: 10, value: 'якутский' }] };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.escFunction = _this.escFunction.bind(_this);
    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.handleMouseOut = _this.handleMouseOut.bind(_this);
    return _this;
  }

  _createClass(NameForm, [{
    key: 'escFunction',
    value: function escFunction(event) {
      if (event.code == "Escape") {
        document.querySelector('#lang').classList.remove('show');
      }

      if (event.code == "ArrowDown") {
        this.setState(function (prevState) {
          return { arrowIndex: prevState.arrowIndex + 1 };
        });
        var index = this.state.arrowIndex;
        if (index < this.state.langList.length) {
          console.log(index);
          document.querySelector('#lang > div:nth-child(' + index + ')').classList.add('active');

          if (index != 1) {
            index = index - 1;
            document.querySelector('#lang > div:nth-child(' + index + ')').classList.remove('active');
          }
        }
      }

      if (event.code == "ArrowUp") {

        var _index = this.state.arrowIndex;
        if (_index > 0) {
          console.log(_index);
          document.querySelector('#lang > div:nth-child(' + _index + ')').classList.remove('active');

          this.setState(function (prevState) {
            return { arrowIndex: prevState.arrowIndex - 1 };
          });

          if (_index != 1) {
            _index = _index - 1;
            document.querySelector('#lang > div:nth-child(' + _index + ')').classList.add('active');
          }
        }
      }

      console.log(this.state.arrowIndex + ' ист');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener("keydown", this.escFunction, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.escFunction, false);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      document.querySelector('#lang').classList.add('show');
      document.querySelector('#selected-lang').classList.add('focus');
      document.querySelector('label > span').classList.add('focus');
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(lang) {
      this.setState(function (state) {
        return state.selectedLang.push({
          id: state.selectedLang.length != 0 ? state.selectedLang.length : 0,
          value: lang.value
        });
      });

      var index = this.state.langList.map(function (lang) {
        return lang.id;
      }).indexOf(lang.id);

      this.setState(function (state) {
        return state.langList.splice(index, 1);
      });

      this.setState({ value: "" });

      document.querySelector('#lang').classList.remove('show');
      document.querySelector('#selected-lang').classList.remove('focus');
      document.querySelector('label > span').classList.remove('focus');
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(item) {
      var index = this.state.selectedLang.map(function (lang) {
        return lang.id;
      }).indexOf(item.id);

      this.setState(function (state) {
        return state.selectedLang.splice(index, 1);
      });

      this.setState(function (state) {
        return state.langList.push({
          id: state.langList.length != 0 ? state.langList.length : 0,
          value: item.value
        });
      });
    }
  }, {
    key: 'handleMouseOver',
    value: function handleMouseOver(item) {
      // let index = this.state.arrowIndex
      var index = 4;
      document.querySelector('#lang > div:nth-child(' + index + ')').classList.add('active');
    }
  }, {
    key: 'handleMouseOut',
    value: function handleMouseOut(item) {
      // let index = this.state.arrowIndex
      var index = 4;
      document.querySelector('#lang > div:nth-child(' + index + ')').classList.remove('active');
      console.log('out');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          { htmlFor: 'dropdown' },
          React.createElement(
            'span',
            null,
            '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A:'
          ),
          React.createElement(
            'div',
            { id: 'selected-lang' },
            React.createElement(SelectedList, {
              handleDelete: this.handleDelete,
              list: this.state.selectedLang
            }),
            React.createElement('input', {
              type: 'text',
              id: 'dropdown',
              value: this.state.value,
              onChange: this.handleChange,
              onFocus: this.handleFocus
            })
          )
        ),
        React.createElement(DataList, {
          handleSubmit: this.handleSubmit,
          handleMouseOver: this.handleMouseOver,
          handleMouseOut: this.handleMouseOut,
          value: this.state.value,
          langList: this.state.langList
        })
      );
    }
  }]);

  return NameForm;
}(React.Component);

// Выбранные языки


function SelectedList(props) {
  function handleClick(item, e) {
    props.handleDelete(item);
  }

  var langList = props.list.map(function (item) {
    return React.createElement(
      'div',
      { key: item.id },
      item.value,
      ' ',
      React.createElement(
        'span',
        { onClick: function onClick(e) {
            return handleClick(item, e);
          } },
        '\u2716'
      )
    );
  });

  return React.createElement(
    'div',
    null,
    langList
  );
}

// Список языков
function DataList(props) {
  function handleClick(item, e) {
    props.handleSubmit(item);
  }

  function handleMouseOver(item, e) {
    props.handleMouseOver(item);
    console.log("hover");
  }

  function handleMouseOut(item, e) {
    props.handleMouseOut(item);
  }

  var variable = [];
  var filterVariable = [];
  var re = new RegExp('^' + props.value + '', 'i');

  for (var i = 0; i < props.langList.length - 1; i++) {
    var item_lang = props.langList[i];
    if (re.test(item_lang.value)) {
      filterVariable.push(item_lang);
    }
  }

  // const filterVariable = variable.filter((item) => re.test(item))

  var listItems = filterVariable.map(function (item) {
    return React.createElement(
      'div',
      {
        key: item.id,
        onClick: function onClick(e) {
          return handleClick(item, e);
        },
        onMouseOver: function onMouseOver(e) {
          return handleMouseOver(item, e);
        },
        onMouseOut: function onMouseOut(e) {
          return handleMouseOut(item, e);
        }
      },
      item.value
    );
  });

  return React.createElement(
    'div',
    { id: 'lang' },
    listItems
  );
}

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(NameForm, null), domContainer);