import React, { Component } from 'react';
import { Modal } from 'antd';
import Sdk from 'Src/util/sdk';
import formValidate from 'Src/util/validate';
import style from './index.scss';

const InputType = {
  name: 'name',
  email: 'email',
  remail: 'remail',
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      userInfo: {
        name: '',
        email: '',
        remail: '',
      },
      submitErrMsg: '',
      submitButtonValue: 'Send',
      submitSuccess: false,
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);
  }

  getPopupContent() {
    const {
      submitErrMsg,
      submitButtonValue,
      submitSuccess,
    } = this.state;

    if (submitSuccess) {
      return (
        <div className={style.popupContainer}>
          <div className={style.title}>All Done!</div>
          <div className={style.spacer} />
          <div className={style.succText}>
            You will be one of the first to experience Broccoli & Co. wen we launch
          </div>
          <div className={style.btn} onClick={this.handlePopupClose}>ok</div>
        </div>
      )
    }

    return (
      <div className={style.popupContainer}>
        <div className={style.title}>Request an Invitation</div>
        <div className={style.spacer} />
        <div className={style.inputBox}>
          <input className={style.input} onChange={this.handleInput} id="name" placeholder="Full Name" />
          <input className={style.input} onChange={this.handleInput} id="email" placeholder="Email" />
          <input className={style.input} onChange={this.handleInput} id="remail" placeholder="Confirm Email" />
        </div>
        <div className={style.btn} onClick={this.handleSubmit}>{submitButtonValue}</div>
        <div className={style.errMsg}>{submitErrMsg}</div>
      </div>
    )
  }

  handleBtnClick() {
    this.setState({
      showPopup: true,
    })
  }

  handlePopupClose() {
    this.setState({
      showPopup: false,
    })
  }

  handleSubmit() {
    const { userInfo } = this.state;
    const errMsg = formValidate(userInfo);

    if (errMsg) {
      this.setState({
        submitErrMsg: errMsg,
      })

      return;
    }

    this.setState({
      submitButtonValue: 'Sending, Please wait...',
      submitErrMsg: '',
    })
    Sdk.submitUserInfo(userInfo).then(() => {
      this.setState({
        submitSuccess: true,
      })
    }).catch((err) => {
      const { data } = err.response || {};

      this.setState({
        submitButtonValue: 'Send',
        submitErrMsg: data.errorMessage || 'error!',
      })
    })
  }

  handleInput(e) {
    const { userInfo } = this.state;

    if (e.target.id === InputType.name) {
      const user = {
        name: e.target.value,
      }
      this.setState({
        userInfo: { ...userInfo, ...user },
      })
    }

    if (e.target.id === InputType.email) {
      const user = {
        email: e.target.value,
      }
      this.setState({
        userInfo: { ...userInfo, ...user },
      })
    }

    if (e.target.id === InputType.remail) {
      const user = {
        remail: e.target.value,
      }
      this.setState({
        userInfo: { ...userInfo, ...user },
      })
    }
  }

  render() {
    const {
      showPopup,
    } = this.state;
    const popupContent = this.getPopupContent();

    return (
      <div className={style.wrapper}>
        <div className={style.header}>Broccoli & Co.</div>
        <div className={style.content}>
          <div className={style.title}>A better way</div>
          <div className={style.title}>to enjoy every day.</div>
          <div className={style.slogan}>be the first to know when we launch.</div>
          <div className={style.btn} onClick={this.handleBtnClick}>Request an Invitation</div>
        </div>
        <div className={style.footer}>
          <div className={style.text}>Made with ❤ in Melbourne.</div>
          <div className={style.text}>© 2016 Broccoli & Co. All rights reserved.</div>
        </div>
        <Modal
          centered
          closable={false}
          footer={null}
          maskClosable
          visible={showPopup}
          width="6rem"
          onCancel={this.handlePopupClose}
        >
          {popupContent}
        </Modal>
      </div>
    );
  }
}

export default Home;
