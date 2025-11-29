import "./Form.css"

function Form() {
    return (
        <div className="form-container">
            <form action="">
                <label htmlFor="firstName">First Name :</label>
                <input type="text" name="lastName" id="lastName" />
                <br />
                <label htmlFor="lastName">Last Name : </label>
                <input type="text" name="lastName" id="lastName" />
                <br />
                <label htmlFor="email">Email Address : </label>
                <input type="email" name = "email" id="email" />
                <br />
                <label htmlFor="dropdown">Country: </label>
                <select name="drowndown" id="dropdown">
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Russia">Russia</option>
                    <option value="UAE">UAE</option>
                </select>
                <br />
                <label htmlFor="street-address">Street Address: </label>
                <input type="text" name="street-address" id="street-address" />
                <br />
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" />
                <br />
                <label htmlFor="state/province">State/Province</label>
                <input type="text" name="state/province" id="state/province" />
                <br />
                <label htmlFor="zip/postal-code">ZIP/Postal Code: </label>
                <input type="text" name="ZIP/Postal-code" id="ZIP/Postal-code" />
                <br />
                <label htmlFor="by-email">By Email : </label>
                <div className="checkboxes">
                    <div className="comments-checkbox">
                        <input type="checkbox" name="comments" id="comments"  />
                        <label htmlFor="comments">Comments</label>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="candidates-checkbox">
                        <input type="checkbox" name="candidates" id="candidates" />
                        <label htmlFor="candidates">Cnadidates</label>
                        <div className="candidates text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, magnam.</p>
                        </div>
                    </div>
                    <div className="others-checkbox">
                        <input type="checkbox" name="others" id="otthers"  />
                        <label htmlFor="others">Others</label>
                        <div className="others-text">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>

                <div className="push-notifications">
                    <label htmlFor="push-notifications">Push Notifications</label>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="radio-buttons">
                        <input type="radio" name="push-notifications" id="everything" />
                        <label htmlFor="push-notifications">Everything</label>
                        <br />
                        <input type="radio" name="push-notifications" id="same-as-email" />
                        <label htmlFor="same-as-email">Same as Email</label>
                        <br />
                        <input type="radio" name="push-notifications" id="no-push-notifications" />
                        <label htmlFor="no-push-notifications">No Push Notifications</label>
                    </div>
                </div>

                <button>Save</button>

            </form>
        </div>
    )
}
export default Form