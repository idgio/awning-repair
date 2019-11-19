import React, { Component } from 'react'
import CartLayout from '../components/cartLayout'

let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmYzliYWIwMWJjODE0MjE5NTM3ZDYzMjNiMGFiYmIzODAyYWZhNzNmYWM1ZGU5MDg1NjA0MDZhZTgwYzFiMjM1NzE1ZTNkZTYwMzc5Yjg5In0.eyJhdWQiOiIxIiwianRpIjoiMWZjOWJhYjAxYmM4MTQyMTk1MzdkNjMyM2IwYWJiYjM4MDJhZmE3M2ZhYzVkZTkwODU2MDQwNmFlODBjMWIyMzU3MTVlM2RlNjAzNzliODkiLCJpYXQiOjE1NDM2MTQzNDUsIm5iZiI6MTU0MzYxNDM0NSwiZXhwIjoxNTc1MTUwMzQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mdqxa0HrBHMj0fros1hq0wurivLRdtvGIYo8Ll29uqU2_LANeVAbzRwvCmXh553bIBUFOaM5WDSzVgLUCvgW_au5VamZRy7_H6tUSxbdpEtxx-x0vqm3q0dsC7N9FlXxwu6p7oE1PsxwdzTim5rn7qX44DTkCyYeqC4U4yAMo69xluYLtFJ0GVQ_IeYag8aofc2Q3QTJsWa-tdsmKR-2vfGza2WPgYLaSqpgqx1bZl7fX8mK3JjdkSl3IKmGmVwgafU7wuymaBklLhKER3_K5IshEgE-pzsoEgDU7-pFnxaJF0iGJXSHtZnRMVGVDhUiG7enoJbKaku8r7QlpXyHB_jKvjCrErkIjKVQVaxmP67T_npVkabzedpEzutDIVCdoSKCw_IaEdyNd_a_VLCJOInGlznQljp--YCleVvRO_r1iXFC1QPKuaW3JiVYUeEcOyiUmyNsTTd1seHxU8ueb7r2gaH_FabPec3mZwHjBKLEnILJXQohw3GhB7rgUxHg5lQG4W8MAl3_ZpWFAnCrWF-_LyFNo5dRaoIHkubyCgIBN2ipkTq77JIeqEiYFvZjHR7ZgmqvozO8pOifOdcROVbCGdMRIvdSQ9n7AmnkneictXrWtjOSo511r5HzXm18fCi6fs6HZUK3tLqZDk-WHskP7uFEUn34CRZv_eqEYNM');
    myHeaders.append('Accept', 'application/json');
    



class Cart extends Component {
    constructor(props) {
    super(props);
        this.state = { 
            sQuareUpReady: false,
            nameShipping: '',
            email: '',
            phone: '(   )    -    ',
            openAfterDone: false,
            company: '',
            shippingAddress: '',
            state: '',
            city: '',
            zipShipping: '',
            shippingAmount: 0,
            loading: true,
            completed: 0,
            
        }
        this.handleResetCart =  this.props.handleResetCart.bind(this)
      }
    
    componentWillMount() {
       
        const that = this;
        let sqPaymentScript = document.createElement("script");
        sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
        sqPaymentScript.type = "text/javascript";
        sqPaymentScript.async = false;
        sqPaymentScript.onload = () => {
          that.setState({
            sQuareUpReady: true
          });
        };
        document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
        
    }
   
    handleCloseAfterDone =() => {
        this.setState(prevState => ({
              loading: !prevState.loading
            }));
     };
     handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        },()=>{
            if(name === 'shippingAddress'  || name === 'state'  || name === 'city'  || name === 'zip' )
            {
                this.setState({
                  loading : true,
                  completed: 0,
                })
            }
        });
     };
    handleClickShipping = () => {
        if(this.state.shippingAddress !== '' && this.state.state !== '' && this.state.city !== '' && this.state.zip !== ''  )
            {
                this.setState({completed: 25})
                var data = new FormData();
                data.append("shippingAddress", this.state.shippingAddress);
                data.append("state", this.state.state);
                data.append("city", this.state.city);
                data.append("zip", this.state.zipShipping);
                data.append("items", this.props.items);
                fetch("https://dev.thecanvasmart.com/awning-repair/api/getFedExBestOption", {
                    method: 'POST', 
                    body: data, 
                    headers:myHeaders
                  }).then(res => res.json())
                  .catch(error => console.error('Error:', error))
                  .then((response) =>{
                    this.setState({shippingAmount : response, loading: false, completed: 100})
                    
                  })
            }
    } 
    handleResetShipping = () => {
        this.handleResetCart()
        this.setState({
            nameShipping: '',
            email: '',
            phone: '(   )    -    ',
            openAfterDone: true,
            company: '',
            shippingAddress: '',
            state: '',
            city: '',
            zipShipping: '',
            shippingAmount: 0,
            loading: true,
            completed: 0,
        })
    }
    handleCloseAfterCompleted = () => {
        this.setState({
            openAfterDone: false,
        })
    }
    render(){
        return(
            this.state.sQuareUpReady && <CartLayout items={this.props.items} totalAwnings={this.props.totalAwnings} handleCloseAfterDone={this.handleCloseAfterDone} handleClickShipping={this.handleClickShipping} handleChange={this.props.handleChange} handleChangeText={this.handleChange} handleAwningDelete={this.props.handleAwningDelete} {...this.state}  paymentForm={window.SqPaymentForm} handleResetShipping={this.handleResetShipping} handleCloseAfterCompleted={this.handleCloseAfterCompleted} />
        )
    }
}
export default Cart