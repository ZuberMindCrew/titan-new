// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-service',
//   templateUrl: './service.component.html',
//   styleUrls: ['./service.component.scss']
// })
// export class ServiceComponent {

// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  imageLoaded = false;

  ngOnInit() {
    // Optional: You can add a timeout to ensure spinner shows for minimum time
    setTimeout(() => {
      const img = new Image();
      img.src = 'assets/speedtrain.jpg';
      img.onload = () => {
        this.imageLoaded = true;
      };
    }, 0);
  }
}