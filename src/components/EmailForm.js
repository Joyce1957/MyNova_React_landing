import React, {useState} from 'react'


export default function EmailForm(props) {
 
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const [item, setItem] = useState('');
    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.item })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
          e.preventDefault();
    }

    return (
        <div className="email-form-div">
        <form id="email-form" className="form-group email-form"
         action="mailchimp.php" method="post"
         onSubmit={handleSubmit}>
            <input type="email" 
            className="form-control email-input" 
            value={item} 
            id="newsletter-email-input"
            placeholder="Enter your email" 
            onChange={e => setItem(e.target.value)}
            />
            <button type="submit" className="btn submit-btn">Download</button>
            <div id="newsletter-spinner">
                <i className="fa fa-cog fa-spin" style={{fontSize:"24px"}}></i>
            </div>
        </form>
    </div>
    )
}
