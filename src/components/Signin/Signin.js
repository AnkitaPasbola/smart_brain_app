import React from 'react';

 class Signin extends React.Component{
 	constructor(props){
 		super(props);
 		this.state={
 			signInEmail:'',
 			signInPassword:''
 		}
 	}
 	onEmailChange=(event)=>{
 		this.setState({signInEmail:event.target.value})
 	}

 	onPasswordChange=(event)=>{
 		this.setState({signInPassword:event.target.value})
 	}

 	onSubmitSignIn=()=>{
       fetch('http://localhost:3001/signin',{
       	method: 'post',
       	headers:{'content-type':'application/json'},
       	body:JSON.stringify({
       		email:this.state.signInEmail,
       		password:this.state.signInPassword
       	})
       })
       this.props.onRouteChange('home');
 	}
 	render(){
 		const {onRouteChange}=this.props;
 		return(
		<article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-4">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 garamond ph0 mh0 i">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy garamond f6" htmlFor="email-address">Email</label>
			        <input 
			          onChange={this.onEmailChange} 
			          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			          type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label 
			        className="db fw6 lh-copy garamond  f6" htmlFor="password">Password</label>
			        <input 
                     onChange={this.onPasswordChange}
			         className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			         type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			    {/*if we write it like:onClick={onRouteChange('home')}, we don't want to run the function.
				the way we actualyy have it now is that we are gonna run the function onRouteChange('home') 
			    when it gets rendered but that's not what we want. We want it to run whenever onClick happens,
			    and then onClick will call this function. So the way we do that is we can do an arrow function.
			    This arrow function will just have an onRouteChange('home'). So, its just a funtion that's gonna 
			    get called ,here we are just defining the function. */}
			      <input 
                   onClick={this.onSubmitSignIn}
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      type="submit" value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={()=>onRouteChange('register')} className="f6 pointer athelas link dim black db">Register</p>
			    </div>
			  </div>
			</main>
		</article>	
    );
 	}
	
}

export default Signin;