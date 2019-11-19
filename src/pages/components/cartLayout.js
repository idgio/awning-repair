import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask'
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Shipping from '@material-ui/icons/LocalShipping';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmYzliYWIwMWJjODE0MjE5NTM3ZDYzMjNiMGFiYmIzODAyYWZhNzNmYWM1ZGU5MDg1NjA0MDZhZTgwYzFiMjM1NzE1ZTNkZTYwMzc5Yjg5In0.eyJhdWQiOiIxIiwianRpIjoiMWZjOWJhYjAxYmM4MTQyMTk1MzdkNjMyM2IwYWJiYjM4MDJhZmE3M2ZhYzVkZTkwODU2MDQwNmFlODBjMWIyMzU3MTVlM2RlNjAzNzliODkiLCJpYXQiOjE1NDM2MTQzNDUsIm5iZiI6MTU0MzYxNDM0NSwiZXhwIjoxNTc1MTUwMzQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mdqxa0HrBHMj0fros1hq0wurivLRdtvGIYo8Ll29uqU2_LANeVAbzRwvCmXh553bIBUFOaM5WDSzVgLUCvgW_au5VamZRy7_H6tUSxbdpEtxx-x0vqm3q0dsC7N9FlXxwu6p7oE1PsxwdzTim5rn7qX44DTkCyYeqC4U4yAMo69xluYLtFJ0GVQ_IeYag8aofc2Q3QTJsWa-tdsmKR-2vfGza2WPgYLaSqpgqx1bZl7fX8mK3JjdkSl3IKmGmVwgafU7wuymaBklLhKER3_K5IshEgE-pzsoEgDU7-pFnxaJF0iGJXSHtZnRMVGVDhUiG7enoJbKaku8r7QlpXyHB_jKvjCrErkIjKVQVaxmP67T_npVkabzedpEzutDIVCdoSKCw_IaEdyNd_a_VLCJOInGlznQljp--YCleVvRO_r1iXFC1QPKuaW3JiVYUeEcOyiUmyNsTTd1seHxU8ueb7r2gaH_FabPec3mZwHjBKLEnILJXQohw3GhB7rgUxHg5lQG4W8MAl3_ZpWFAnCrWF-_LyFNo5dRaoIHkubyCgIBN2ipkTq77JIeqEiYFvZjHR7ZgmqvozO8pOifOdcROVbCGdMRIvdSQ9n7AmnkneictXrWtjOSo511r5HzXm18fCi6fs6HZUK3tLqZDk-WHskP7uFEUn34CRZv_eqEYNM');
    myHeaders.append('Accept', 'application/json');
const styles = theme => ({
    root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 2,
    width: '100%',
  },
   paperNo: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    margin: 15,
  },phoneLabel:{
    paddingTop: 22,
    paddingLeft: 11,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
   
  },
  fiftyFormControl: {
    width: '50%',
  },
   fiftyFormControl2: {
    width: '50%',
    paddingTop: 16,
  },
  thirtyFormControl: {
      width: '33%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

    },
  phoneLabel:{
    paddingTop: 22,
    paddingLeft: 11,
  },
  rootList: {
    width: '100%',
    
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  inlineFex: {    
    display: 'inline-flex'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100px',
  },
  textFieldQ: {
    maxWidth: 75,
  },
   rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  name: {
    verticalAlign: "top",
    display: "none",
    margin: 0,
    border: "none",
    fontSize: "16px",
    fontFamily: "Helvetica Neue",
    padding: "16px",
    color: "#373F4A",
    backgroundColor: "transparent",
    lineHeight: "1.15em",
    placeholderColor: "#000",
    _webkitFontSmoothing: "antialiased",
    _mozOsxFontSmoothing: "grayscale"
  },
  leftCenter: {
    float: "left",
    textAlign: "center"
  },
  blockRight: {
    display: "block",
    float: "right"
  },
  center: {
    textAlign: "center"
  }
});
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

class CartLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardBrand: "",
      nonce: undefined,
      googlePay: false,
      applePay: false,
      masterpass: false
    };
    this.requestCardNonce = this.requestCardNonce.bind(this);
    this.handleCloseAfterDone =  this.props.handleCloseAfterDone.bind(this)
    this.handleResetShipping =  this.props.handleResetShipping.bind(this)
  }

  requestCardNonce() {
    this.paymentForm.requestCardNonce();
    this.handleCloseAfterDone();
    
  }

  componentDidMount() {
    const config = {
      applicationId: "sq0idp-2eRhT4oP3VL5jcCT_xL1mA",
      locationId: "T4JPGV81X9GR7",
      inputClass: "sq-input",
      autoBuild: false,
      inputStyles: [
        {
          fontSize: "16px",
          fontFamily: "Helvetica Neue",
          padding: "16px",
          color: "#373F4A",
          backgroundColor: "transparent",
          lineHeight: "1.15em",
          placeholderColor: "#000",
          _webkitFontSmoothing: "antialiased",
          _mozOsxFontSmoothing: "grayscale"
        }
      ],
      applePay: {
        elementId: "sq-apple-pay"
      },
      masterpass: {
        elementId: "sq-masterpass"
      },
      googlePay: {
        elementId: "sq-google-pay"
      },
      cardNumber: {
        elementId: "sq-card-number",
        placeholder: "• • • •  • • • •  • • • •  • • • •"
      },
      cvv: {
        elementId: "sq-cvv",
        placeholder: "CVV"
      },
      expirationDate: {
        elementId: "sq-expiration-date",
        placeholder: "MM/YY"
      },
      postalCode: {
        elementId: "sq-postal-code",
        placeholder: "Zip"
      },
      callbacks: {
        methodsSupported: methods => {
          if (methods.googlePay) {
            this.setState({
              googlePay: methods.googlePay
            });
          }
          if (methods.applePay) {
            this.setState({
              applePay: methods.applePay
            });
          }
          if (methods.masterpass) {
            this.setState({
              masterpass: methods.masterpass
            });
          }
          return;
        },
        createPaymentRequest: () => {
          return {
            requestShippingAddress: false,
            requestBillingInfo: true,
            currencyCode: "USD",
            countryCode: "US",
            total: {
              label: "The Canvas Mart",
              amount: "100",
              pending: false
            },
            lineItems: [
              {
                label: "Subtotal",
                amount: "100",
                pending: false
              }
            ]
          };
        },
        cardNonceResponseReceived: (errors, nonce, cardData) => {
          if (errors) {
            // Log errors from nonce generation to the Javascript console
            console.log("Encountered errors:");
            errors.forEach(function(error) {
              console.log("  " + error.message);
            });
            this.handleCloseAfterDone()
            return;
          }
          this.setState({
            nonce: nonce
          },()=>{
               
                var data = new FormData();
                data.append("nonce", this.state.nonce);
                data.append("items", JSON.stringify(this.props.items));
                data.append("shippingAmount", this.props.shippingAmount);
                data.append("shippingAddress", this.props.shippingAddress);
                data.append("state", this.props.state);
                data.append("city", this.props.city);
                data.append("zip", this.props.zipShipping);
                data.append("name", this.props.nameShipping);
                data.append("phone", this.props.phone);
                data.append("company", this.props.company);
                data.append("email", this.props.email);
                data.append("totalAwnings", this.props.totalAwnings);
                console.log(this.props.totalAwnings)
                fetch("https://dev.thecanvasmart.com/awning-repair/api/requests", {
                    method: 'POST', 
                    body: data, 
                    headers:myHeaders
                  }).then(res => res.json())
                  .catch(error => {
                    console.error('Error:', error)
                    this.handleCloseAfterDone()}
                  )
                  .then((response) =>{
                    // this.setState({shippingAmount : response, loading: false})
                    console.log(response)
                    this.handleCloseAfterDone();
                     this.handleResetShipping()
                  })
          });
        },
        unsupportedBrowserDetected: () => {},
        inputEventReceived: inputEvent => {
          switch (inputEvent.eventType) {
            case "focusClassAdded":
              break;
            case "focusClassRemoved":
              break;
            case "errorClassAdded":
              document.getElementById("error").innerHTML =
                "Please fix card information errors before continuing.";
              break;
            case "errorClassRemoved":
              document.getElementById("error").style.display = "none";
              break;
            case "cardBrandChanged":
              if (inputEvent.cardBrand !== "unknown") {
                this.setState({
                  cardBrand: inputEvent.cardBrand
                });
              } else {
                this.setState({
                  cardBrand: ""
                });
              }
              break;
            case "postalCodeChanged":
              break;
            default:
              break;
          }
        },
        paymentFormLoaded: function() {
          document.getElementById("name").style.display = "inline-flex";
        }
      }
    };
    this.paymentForm = new this.props.paymentForm(config);
    this.paymentForm.build();
  }

  render() {
    const { classes, items, handleChange,handleAwningDelete,shippingAmount } = this.props;
    let cartTotal = 0
    let totalF = 0
    return (
      <div className={classes.root}>
        <Grid container  justify="center" >
          <Grid item xs={12} sm={12} md={8}>
          <Paper className={classes.paperNo}>
                <FormControl fullWidth>
                    <FormLabel component="legend">Shipping details</FormLabel>
                </FormControl>
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="nameShipping"
                      label="Name"
                      className={classes.textField}
                      value={this.props.nameShipping}
                      onChange={this.props.handleChangeText('nameShipping')}
                      margin="normal"
                    />
                </FormControl>
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="company"
                      label="Company"
                      className={classes.textField}
                      value={this.props.company}
                      onChange={this.props.handleChangeText('company')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="email"
                      label="Email"
                      className={classes.textField}
                      value={this.props.email}
                      type="email"
                      onChange={this.props.handleChangeText('email')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="maskExample"
                      label="Phone"
                      className={classes.textField}
                      margin="normal"
                      InputProps={{
                        inputComponent: TextMaskCustom,
                        value: this.props.phone,
                        onChange: this.props.handleChangeText('phone'),
                      }}
                    />
                    
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                      id="shippingAddress"
                      label="Shipping Address"
                      className={classes.textField}
                      value={this.props.shippingAddress}
                      onChange={this.props.handleChangeText('shippingAddress')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.thirtyFormControl}>
                    <TextField
                      id="state"
                      label="State"
                      className={classes.textField}
                      value={this.props.state}
                      onChange={this.props.handleChangeText('state')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.thirtyFormControl}>
                    <TextField
                      id="city"
                      label="City"
                      className={classes.textField}
                      value={this.props.city}
                      onChange={this.props.handleChangeText('city')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.thirtyFormControl}>
                    <TextField
                      id="zipShipping"
                      label="Zip"
                      className={classes.textField}
                      value={this.props.zipShipping}
                      onChange={this.props.handleChangeText('zipShipping')}
                      margin="normal"
                    />
                </FormControl>
                 <FormControl fullWidth>
                    <Button variant="contained" color="secondary" size="large" className={classes.button} onClick={this.props.handleClickShipping} >
                        Calculate shipping
                        <Shipping className={classes.rightIcon} />
                    </Button>
                    <LinearProgress variant="determinate" value={this.props.completed} />
                </FormControl>
                
                <List className={classes.rootList}>
                {items.length > 0 ?  
                    
                      items.map((awning, index) => (
                      cartTotal += awning[11]*items[index][10],
                  <ListItem key={awning[12]} alignItems="flex-start">
                    <div>
                      <img className={classes.img} alt="complex" src={awning["9"]} />
                    </div>
                    <ListItemText
                      primary={"Awning Fabric: "+awning[8]}
                      secondary={
                        <React.Fragment>
                            <Typography color="textSecondary">A: {awning[1]} "</Typography>
                            <Typography color="textSecondary">B: {awning[2]} "</Typography>
                            <Typography color="textSecondary">C: {awning[3]} "</Typography>
                            {awning[4]  ? (<Typography color="textSecondary">D: {awning[4]} "</Typography>) : (null)}
                         
                        </React.Fragment>
                      }
                    />
                     <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={()=>handleAwningDelete(index)}>
                        <DeleteIcon />
                      </IconButton>
                      <FormControl className={classes.inlineFex}>
                      <InputLabel className={classes.textFieldQ} htmlFor="quantityItem">Quantity</InputLabel>
                        <Input
                          id="quantityItem"
                          className={classes.textFieldQ}
                          onChange={handleChange(index)}
                          value={items[index][10]}
                          margin="dense"
                          type="number"
                        />
                        </FormControl >
                      <Typography className={classes.inlineFex} variant="subtitle1">${(awning[11]*items[index][10]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Typography>
                    </ListItemSecondaryAction>
                     
                  </ListItem>
                 )) : ''}
                  
                  <ListItem  style={{textAlign: 'right', justifyContent: 'flex-end', paddingRight: 5}}>
                   Sub - Total ${cartTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                   </ListItem>
                  <ListItem  style={{textAlign: 'right', justifyContent: 'flex-end', paddingRight: 5}}>
                   Shipping ${parseFloat(shippingAmount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                   </ListItem>
                  <ListItem  style={{textAlign: 'right', justifyContent: 'flex-end', paddingRight: 5}}>
                   Total ${(parseFloat(shippingAmount) + cartTotal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                   </ListItem>
                </List>
                <div className="container">
                    <div id="form-container">
                      <div id="sq-walletbox" >
                        <button
                          style={{ display: this.state.applePay ? "inherit" : "none" }}
                          className="wallet-button"
                          id="sq-apple-pay"
                        />
                        <button
                          style={{ display: this.state.masterpass ? "block" : "none" }}
                          className="wallet-button"
                          id="sq-masterpass"
                        />
                        <button
                          style={{ display: this.state.googlePay ? "inherit" : "none" }}
                          className="wallet-button"
                          id="sq-google-pay"
                        />
                        <hr />
                      </div>
            
                      <div id="sq-ccbox">
                        <p>
                          <span className={classes.leftCenter}>Enter Card Info Below </span>
                          <span className={classes.blockRight}>
                            {this.state.cardBrand.toUpperCase()}
                          </span>
                        </p>
                        <div id="cc-field-wrapper">
                          <div id="sq-card-number" />
                          <input type="hidden" id="card-nonce" name="nonce" />
                          <div id="sq-expiration-date" />
                          <div id="sq-cvv" />
                        </div>
                        <input
                          id="name"
                          className={classes.name}
                          type="text"
                          placeholder="Name"
                        />
                        <div id="sq-postal-code" />
                      </div>
                      
                    </div>
                    <p className={classes.center} id="error" />
                  </div>
               
                <FormControl fullWidth>
                    <Button variant="contained" color="secondary" size="large" className={classes.button} onClick={this.requestCardNonce} disabled={this.props.loading}>
                        Place order
                        <Send className={classes.rightIcon} />
                    </Button>
                    
                </FormControl>
                <Snackbar
                  open={this.props.openAfterDone}
                  TransitionComponent={Transition}
                  onClose={this.props.handleCloseAfterCompleted}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Thank you for your order</span>}
                />
                </Paper>
             </Grid>
        </Grid>
    </div>
      
    );
  }
}

CartLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CartLayout);