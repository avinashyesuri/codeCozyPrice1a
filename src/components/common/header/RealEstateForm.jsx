// RealEstateForm.js
import React, { useState } from 'react';
import './RealEstateForm.css';

export const RealEstateForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    SubCategory: '',
    description: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    contactEmail: '',
    PrefferedGuest:'',
    Foodincluded:'',
    Rules:'',
    availablefromdate:'',
    closetime:'',
    sharingtype:'',
    Rent:'',
    deposite:'',
    Laundry:'',
    roomcleaning:'',
    warden:'',
    photos: [],
    videos: [],
  });

  const [errors, setErrors] = useState({
    title: '',
    SubCategory: '',
    description: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    contactEmail: '',
    PrefferedGuest:'',
    Foodincluded:'',
    Rules:'',
    availablefromdate:'',
    closetime:'',
    sharingtype:'',
    Rent:'',
    deposite:'',
    Laundry:'',
    roomcleaning:'',
    warden:'',
    photos: '',
    videos:'',
  });

  const locations = ['City A', 'City B', 'City C'];
  const bedroomOptions = ['1', '2', '3', '4', '5+'];
  const bathroomOptions = ['1', '1.5', '2', '2.5', '3+'];
  const priceOptions = [
    '$100,000 - $200,000',
    '$200,000 - $300,000',
    '$300,000 - $400,000',
    '$400,000 - $500,000',
    '$500,000+',
  ];
  const wardenoptions=['']
  const Laundryoptions=['1','2']
  const roomcleaningoptions=['Daily','Once in 2 Days','Once in 4 Days','Once in 5 Days','Once in a Week']
  const depositeoptions=['2000','2500','3000']
  const Rentoptions=['4500','5000','5500','6000','6500','7000','7500']
  const sharingtypeoptions=['1 Sharing','2 Sharing','3 Sharing','4 Sharing','5 Sharing']
  const closetimeoptions=['']
  const availablefromdateoptions=['']
  const SubCategoryoptions = ['PG For Gents', 'PG For Women'];
  const PrefferedGuestoptions=['prefer','VIP'];
  const Ruleoptions=['PG Accommodation','Safety and Security','Cleanliness'];
  const Foodincludedoptions=['North Indian Food','South Indian Food','Chaniees']

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      // Handle file input separately for uploading photos
      setFormData({
        ...formData,
        [name]: e.target.files,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const updatedErrors = {
      title: formData.title.length < 1 ? 'Please select a title' : '',
      SubCategory:
        formData.SubCategory.length < 1 ? 'Please select Category' : '',
      description:
        formData.description.length < 10
          ? 'Description must be at least 10 characters'
          : '',
      price: formData.price.length < 1 ? 'Please select a price range' : '',
      location: formData.location.length < 1 ? 'Please select a location' : '',
      bedrooms:
        formData.bedrooms.length < 1
          ? 'Please select the number of bedrooms'
          : '',
      bathrooms:
        formData.bathrooms.length < 1
          ? 'Please select the number of bathrooms'
          : '',
      contactEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)
        ? ''
        : 'Invalid email address',
      photos: formData.photos.length === 0 ? 'Please upload at least one photo' : '',
      videos: formData.videos.length === 0 ? 'Please upload at least one video' : '',
      PrefferedGuest:formData.PrefferedGuest.length<1 ? 'please select the option' : '',
      Rules:formData.Rules.length < 1 ? 'please select the option' :'',
      Foodincluded:formData.Foodincluded.length < 1 ? 'please select the option' :'',
      availablefromdate:formData.availablefromdate.length < 1 ? 'please select the Date':'',
      closetime:formData.closetime.length < 1 ? 'please select Time':'',
      Rent:formData.Rent.length < 1 ? 'please select the option':'',
      deposite:formData.deposite.length < 1 ? 'please select the option':'',
      Laundry:formData.Laundry.length < 1 ? 'please select the option':'',
      roomcleaning:formData.roomcleaning.length < 1 ? 'please select the option':'',
      warden:formData.warden.length < 1 ? 'pleasc sekect the option':'',
    };

    setErrors(updatedErrors);

    return Object.values(updatedErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Real Estate Ad submitted successfully!', formData);
    }
  };

  return (
    <div className="form-container">
      <h2 style={{marginLeft:'0px'}}>Post Real Estate Ad</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label  htmlFor="photos">Photos:</label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            multiple
            onChange={handleChange}
          />
          <span className="error">{errors.photos}</span>
        </div>
        <div className="form-group">
          <label  htmlFor="videos">videos:</label>
          <input
            type="file"
            id="videos"
            name="videos"
            accept="video/*"
            multiple
            onChange={handleChange}
          />
          <span className="error">{errors.videos}</span>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
          style={{border:"solid 1px black"}}
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error-border' : ''}
          />
          <span className="error">{errors.title}</span>
        </div>
        <div className="form-group">
          <label htmlFor="Sub-Category">PG TYPE :</label>
          <select
            id="Sub-Category"
            name="SubCategory"
            value={formData.SubCategory}
            onChange={handleChange}
            className={errors.SubCategory ? 'error-border' : ''}
          >
            <option value="" disabled>
            Select sub-category
            </option>
            {SubCategoryoptions.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
          <span className="error">{errors.SubCategory}</span>
        </div>
        <div className="form-group">
          <label htmlFor="Guest">Guests:</label>
          <select
            id='Preffered-Guest'
            name='PrefferedGuest'
            value={formData.PrefferedGuest}
            onChange={handleChange}
            className={errors.PrefferedGuest ? 'error-border' : ''}
          >
            <option value='' disabled>
              Select PrefferedGuest
            </option>
            {PrefferedGuestoptions.map((prefer) => (
              <option key={prefer} value={prefer}>{prefer}</option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor="Rules">PG Rules :</label>
          <select
           id="Rules"
           name='Rules'
           value={formData.Rules}
           onChange={handleChange}
           className={errors.Rules ? 'error-border' : ''}
          >
            <option value="" disabled>Select PG-rules</option>
            {Ruleoptions.map((rule) =>(
              <option key={rule} value={rule}>{rule}</option>
            ))}

          </select>
          <span className="error">{errors.Rules}</span>
        </div>
        <div className="form-group">
          <label htmlFor="Food">Food :</label>
          <select
            id="Food"
            name="Foodincluded"
            value={formData.Foodincluded}
            onChange={handleChange}
            className={errors.Foodincluded ? 'error-border' : ''}
          >
            <option value="" disabled>
              Select sub-category 
            </option>
            {Foodincludedoptions.map((foo) => (
              <option key={foo} value={foo}>
                {foo}
              </option>
            ))}
          </select>
          <span className="error">{errors.Foodincluded}</span>
        </div>
        <div className="form-group">
          <label htmlFor="availablefromdate">Date:</label>
          <select
            id='availablefromdate'
            name='availablefromdate'
            value={formData.availablefromdate}
            onChange={handleChange}
            className={errors.availablefromdate ? 'error-border' : ''}
          >
            <option value='' disabled>
              Select PrefferedGuest
            </option>
            {availablefromdateoptions.map((prefer) => (
              <option key={prefer} value={prefer}>{prefer}</option>
            ))}
          </select>
          <span className="error">{errors.availablefromdate}</span>
        </div>
        <div className="form-group">
          <label htmlFor="closetime">Time:</label>
          <select
            id='closetime'
            name='closetime'
            value={formData.closetime}
            onChange={handleChange}
            className={errors.closetime ? 'error-border' : ''}
          >
            <option value='' disabled>
              Select PrefferedGuest
            </option>
            {closetimeoptions.map((prefer) => (
              <option key={prefer} value={prefer}>{prefer}</option>
            ))}
          </select>
          <span className="error">{errors.closetime}</span>
        </div>
        <div className="form-group">
          <label htmlFor="sharingtype">Sharing Type:</label>
          <select
            id='sharingtype'
            name='sharingtype'
            value={formData.sharingtype}
            onChange={handleChange}
            className={errors.sharingtype ? 'error-border' : ''}
          >
            <option value='' disabled>
              Select PrefferedGuest
            </option>
            {sharingtypeoptions.map((prefer) => (
              <option key={prefer} value={prefer}>{prefer}</option>
            ))}
          </select>
          <span className="error">{errors.sharingtype}</span>
        </div>
        <div className="form-group">
          <label htmlFor="Rent">Rent :</label>
          <select
            id='Rent'
            name='Rent'
            value={formData.Rent}
            onChange={handleChange}
            className={errors.Rent ? 'error-border' : ''}
          >
            <option value='' disabled>
              Select PrefferedGuest
            </option>
            {Rentoptions.map((prefer) => (
              <option key={prefer} value={prefer}>{prefer}</option>
            ))}
          </select>
          <span className="error">{errors.Rent}</span>
        </div>
        <div className="form-group">
          <label htmlFor="deposite"> Expected Deposite :</label>
          <select
            id='deposite'
            name='deposite'
            value={formData.deposite}
            onChange={handleChange}
            className={errors.deposite ? 'error-border' : ''}
          >
            <option value='' disabled>
              Select PrefferedGuest
            </option>
            {depositeoptions.map((prefer) => (
              <option key={prefer} value={prefer}>{prefer}</option>
            ))}
          </select>
          <span className="error">{errors.deposite}</span>
        </div>
        <div className="form-group">
          <label htmlFor="roomcleaning"> Room cleaning :</label>
          <select
            id='roomcleaning'
            name='roomcleaning'
            value={formData.roomcleaning}
            onChange={handleChange}
            className={errors.roomcleaning ? 'error-border' : ''}
          >
            <option value='' disabled>
              Select type
            </option>
            {roomcleaningoptions.map((prefer) => (
              <option key={prefer} value={prefer}>{prefer}</option>
            ))}
          </select>
          <span className="error">{errors.roomcleaning}</span>
        </div>
        <div className="form-group">
          <label htmlFor="Laundry">Laundry :</label>
          <select
            id='Laundry'
            name='Laundry'
            value={formData.Laundry}
            onChange={handleChange}
            className={errors.Laundry ? 'error-border' : ''}
          >
            <option value='' disabled>
              Select type
            </option>
            {Laundryoptions.map((prefer) => (
              <option key={prefer} value={prefer}>{prefer}</option>
            ))}
          </select>
          <span className="error">{errors.Laundry}</span>
        </div>
        <div className='form-group'>
          <label htmlFor='warden'> Warden :</label>
          <select
          id='warden'
          name='warden'
          value={formData.warden}
          onChange={handleChange}
          className={errors.warden? 'errore-border':''}
          >
            <option value='' disabled>
              Select Type
            </option>
            {wardenoptions.map((ward) => (
              <option key={ward} value={ward}>{ward}</option>
            ))}
          </select>
          <span className='error'>{errors.warden}</span>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={errors.location ? 'error-border' : ''}
          >
            <option value="" disabled>
              Select a location
            </option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <span className="error">{errors.location}</span>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price :</label>
          <select
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={errors.price ? 'error-border' : ''}
          >
            <option value="" disabled>
              Select a price range
            </option>
            {priceOptions.map((pri) => (
              <option key={pri} value={pri}>
                {pri}
              </option>
            ))}
          </select>
          <span className="error">{errors.price}</span>
        </div>

        <div className="form-group">
          <label htmlFor="bedrooms">Bedrooms:</label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className={errors.bedrooms ? 'error-border' : ''}
          >
            <option value="" disabled>
              Select number of bedrooms
            </option>
            {bedroomOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="error">{errors.bedrooms}</span>
        </div>

        <div className="form-group">
          <label htmlFor="bathrooms">Bathrooms:</label>
          <select
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className={errors.bathrooms ? 'error-border' : ''}
          >
            <option value="" disabled>
              Select number of bathrooms
            </option>
            {bathroomOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="error">{errors.bathrooms}</span>
        </div>

        <div className="form-group">
          <label htmlFor="contactEmail">Contact Email:</label>
          <input
          style={{border:"solid 1px black"}}
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className={errors.contactEmail ? 'error-border' : ''}
            required
          />
          <span className="error">{errors.contactEmail}</span>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
          style={{border:"solid 1px black"}}
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? 'error-border' : ''}
            required
          />
          <span className="error">{errors.description}</span>
        </div>

        <div className="form-groupbutton">
          <input className="submit-button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
