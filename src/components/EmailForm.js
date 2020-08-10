import React, {useState} from 'react'


export default function EmailForm(props) {
    const [item, setItem] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`Submitting Name ${item}`)
    }

    return (
        <div className="email-form-div">
        <form id="email-form" className="form-group email-form"
         action="mailchimp.php" method="post"
         onSubmit={handleSubmit}>
            <input type="email" 
            class="form-control email-input" 
            value={item} 
            id="newsletter-email-input"
            placeholder="Enter your email" 
            onChange={e=>setItem(e.target.value)}
            />
            <button type="submit" className="btn submit-btn">Download</button>
            <div id="newsletter-spinner">
                <i className="fa fa-cog fa-spin" style={{fontSize:"24px"}}></i>
            </div>
        </form>
    </div>
    )
}
