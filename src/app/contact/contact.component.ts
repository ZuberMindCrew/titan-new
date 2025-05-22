// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-contact',
// //   templateUrl: './contact.component.html',
// //   styleUrls: ['./contact.component.scss']
// // })
// // export class ContactComponent {

// // }



// import { Component } from '@angular/core';
// import { ContactService } from './contact.service';  // Import the ContactService

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent {
//   // Form model
//   formData = {
//     firstName: '',
//     lastName: '',
//     organization: '',
//     interests: [],
//     scheduleSession: false,
//     phoneNumber: '',
//     email: '',
//     newsLetter: false
//   };

//   // Inject the ContactService into the component
//   constructor(private contactService: ContactService) {}

//   // Method to handle form submission
//   onSubmit() {
//     console.log(this.formData ,"formdtaa");  // Check formData object in the console

//     this.contactService.submitForm(this.formData).subscribe(
//       (response) => {
//         // Handle the response from the backend (e.g., show success message)
//         console.log('Form submitted successfully:', response);
//       },
//       (error) => {
//         // Handle any errors that occur during submission
//         console.error('Error submitting form:', error);
//       }
//     );
//   }
// }



import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    organization: '',
    interests: {
      strategicPlanning: false,
      changeManagement: false,
      organizationalPerformance: false,
      strategicCommunications:false,
      executiveAdvisory:false,
      ceoSpeaking:false,
      executiveForum:false
    },
    scheduleSession: false,
    phoneNumber: '',
    email: '',
    newsLetter: false
  };

  formatPhoneNumber() {
    // Remove all non-digit characters
    let numbers = this.formData.phoneNumber.replace(/\D/g, '');
    
    // Trim to 10 digits max (US phone numbers)
    numbers = numbers.substring(0, 10);
    
    // Format based on length
    if (numbers.length <= 3) {
      this.formData.phoneNumber = numbers;
    } 
    else if (numbers.length <= 6) {
      this.formData.phoneNumber = `(${numbers.substring(0, 3)}) ${numbers.substring(3)}`;
    } 
    else {
      this.formData.phoneNumber = `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6, 10)}`;
    }
  }

  constructor(private router: Router,private contactService: ContactService) {}

  onSubmit() {
    console.log("sdcbjkbhjs", this.formData.phoneNumber.length)

    if (!this.formData.firstName) {
      alert('First name cannot be empty');
      return;  
    }
    if (!this.formData.lastName) {
      alert('Last name cannot be empty');
      return;  
    }
    if (!this.formData.organization) {
      alert('Organization cannot be empty');
      return;  
    }
    if (!this.formData.interests) {
      alert('Interests cannot be empty');
      return;  
    }
    // if (!this.formData.phoneNumber) {
    //   alert('Phone number cannot be empty');
    //   return;  
    // }
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(this.formData.phoneNumber)) {
      alert('Please enter a valid phone number in (123) 456-7890 format');
      return;
    }
  

    if (!this.formData.email) {
      alert('Email cannot be empty');
      return;  
    }
  
    

    // Convert the interests object to an array of selected values
    const selectedInterests = Object.entries(this.formData.interests)
      .filter(([key, value]) => value)
      .map(([key, value]) => this.formatInterestName(key));

    // Create payload with array format expected by API
    const payload = {
      ...this.formData,
      interests: selectedInterests
    };

    console.log('Submitting:', payload);
    this.contactService.submitForm(payload).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        alert('Thank you! Your form has been submitted successfully.');
         
           this.router.navigate(['/home']);  // Navigate to the "About" page


        this.resetForm(); // Optional: reset the form after success
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again.');
      }
    );
  }

  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      organization: '',
      interests: {
        strategicPlanning: false,
        changeManagement: false,
        organizationalPerformance: false,
        strategicCommunications:false,
        executiveAdvisory:false,
        ceoSpeaking:false,
        executiveForum:false
      },
      scheduleSession: false,
      phoneNumber: '',
      email: '',
      newsLetter: false
    };
  }

  // Helper function to convert property names to display format
  private formatInterestName(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }
}