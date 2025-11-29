import { useState } from "react"
import "./Form.css"

function Form() {
    const [formData, setFormData] = useState(
        { firstName: '', lastName: '', email: '', country: '', streetAddress: '', city: '', state_province: '', zip_postal_code: '', comments: false, candidates: false, others: false, push_notifications: '' })


    function ChangeHandler(event) {
        const { name, type, value, checked } = event.target
        setFormData((previousFormData) => {
            return {
                ...previousFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        console.log(formData)
    }


    return (
        <div className="form-container">
            <form action="">

                <label htmlFor="firstName">First Name :</label>
                <input type="text" name="firstName" id="firsttName" value={formData.firstName} onChange={ChangeHandler} />
                <br />

                <label htmlFor="lastName">Last Name : </label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={ChangeHandler} />
                <br />

                <label htmlFor="email">Email Address : </label>
                <input type="email" name="email" id="email" value={formData.email} onChange={ChangeHandler} />
                <br />

                <label htmlFor="country">Country: </label>
                <select name="country" id="country" value={formData.country} onChange={ChangeHandler}>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Russia">Russia</option>
                    <option value="UAE">UAE</option>
                </select>


                <br />
                <label htmlFor="streetAddress">Street Address: </label>
                <input type="text" name="streetAddress" id="streetAddress" value={formData.streetAddress} onChange={ChangeHandler} />
                <br />


                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" value={formData.city} onChange={ChangeHandler} />
                <br />


                <label htmlFor="state_province">State/Province</label>
                <input type="text" name="state_province" id="state_province" value={formData.state_province} onChange={ChangeHandler} />
                <br />


                <label htmlFor="zip_postal_code">ZIP/Postal Code: </label>
                <input type="text" name="zip_postal_code" id="zip_postal_code" value={formData.zip_postal_code} onChange={ChangeHandler} />
                <br />


                <label htmlFor="by-email">By Email : </label>
                <div className="checkboxes">
                    <div className="comments-checkbox">
                        <input type="checkbox" name="comments" id="comments" checked={formData.comments} onChange={ChangeHandler} />
                        <label htmlFor="comments">Comments</label>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="candidates-checkbox">
                        <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} onChange={ChangeHandler} />
                        <label htmlFor="candidates">Cnadidates</label>
                        <div className="candidates text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, magnam.</p>
                        </div>
                    </div>
                    <div className="others-checkbox">
                        <input type="checkbox" name="others" id="otthers" checked={formData.others} onChange={ChangeHandler} />
                        <label htmlFor="others">Others</label>
                        <div className="others-text">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>



                <div className="push-notifications">
                    <label htmlFor="push_notifications">Push Notifications</label>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="radio-buttons">
                        <input type="radio" name="push_notifications" id = "everything" value="everything" checked={formData.push_notifications === "everything"}  onChange={ChangeHandler} />
                        <label htmlFor="push-notifications">Everything</label>
                        <br />
                        <input type="radio" name="push_notifications" id="same-as-email" value="same-as-email" checked={formData.push_notifications === "same-as-email"} onChange={ChangeHandler} />
                        <label htmlFor="same-as-email">Same as Email</label>
                        <br />
                        <input type="radio" name="push_notifications" id="no-push-notifications" value="no-push-notifications" checked={formData.push_notifications === "no-push-notifications"} onChange={ChangeHandler} />
                        <label htmlFor="no-push-notifications">No Push Notifications</label>
                    </div>
                </div>

                <button>Save</button>

            </form>
        </div>
    )
}
export default Form