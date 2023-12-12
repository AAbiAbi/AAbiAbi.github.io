import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectTitle: string = '';
  projectDescription: string = '';
  projectDetails: string[] = [];
  githubLink: string = '';
  videoLink: string = '';
  projectUrl: string = '';
  projectImage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('projectId');
    
    // Now, based on projectId, fetch or determine the project data
    // For demonstration, let's use a simple switch-case:
    switch(projectId) {
      case 'distributerSystem':
        this.projectTitle = 'Distributed RealTime Online Communication';
        this.projectDescription = 'A Full Stack Chord Distributed Hash Table (DHT) Network';
        this.projectDetails = ['Implemented a Chord DHT network in Python, featuring efficient routing via finger tables and unique SHA256 IDs for 5 nodes to support real-time communication by users from different nodes, using Node.js.', 
        'Developed an HTTP server to manage network operations, including adding nodes, file retrieval and user login .', 
        'Incorporated a heartbeat mechanism for network reliability and optimized data storage through file hashing.',
        'Initiated data recovery features and demonstrated network versatility through blog post management methods.'];
        break;
      
      case 'neighbor':
        this.projectTitle = 'Neighbor Project';
        this.projectDescription = 'Full-stack Web Service for a Go and React-based Social Network';
        this.projectDetails = ['Designed and implemented a social network web application serving pics and short-video with React JS.', 
        'Implemented features for users to create and browse posts and support search nearby posts.Improved the authentication using token based registration/login/logout flow with React Router v4 and server-side user authentication with JWT.', 
        'Launched a scalable web service in Go to handle posts and deployed to Google Cloud (Google App Engine).',
        'Used ElasticSearch to optimize search functions such that users can search recent posts and list personal posts. '];
        break;

      // Add more cases for other projects
      case 'onlineOrder':
        this.projectTitle = 'Online Order';
        this.projectDescription = 'A Spring and Hibernate Base Online Food Ordering System';
        this.projectDetails = ['Designed and implemented a full stack web service for users to order food and deliver food (like UberEats).',
        'Implemented Rest API via Spring MVC including registration, menu searching and ordering, checkout etc.      ',
        'Operated relational database with Hibernate to access and operate the information(menu, restaurants etc). Used theSpring framework core technologies to loosely decouple all the components in the application.',
        'Provided authentication and authorization via Spring security to protect the application from malicious attacks.        ',
        'Built the client side with ReactJS and Ant Design to allow users add items to the shopping cart and place orders.'];
        break;

      case 'tinnews':
        this.projectTitle = 'Developed Tinnews';
        this.projectDescription = 'A Tinder-like News App.';
        this.projectDetails = ['It is the Instagram Flavor News app based on Google Component Architectural MVVM Pattern.',
        'Implemented the bottom bar and page navigation using JetPack navigation component.',
        'Utilized 3rd party CardStackView(RecyclerView) to support swipe gestures for liking/disliking the news.',
        'Built the Room Database with LiveData and ViewModel to support local cache the offline mode.',
        'Integrated Retrofit and LiveData to pull the latest news data from a RESTFUL endpoint(newsapi.org).'];
        break;

      case 'twitch':
        this.projectTitle = 'Twitch+';
        this.projectDescription = 'A Personalized Twitch Resources Recommandation Engine';
        this.projectDetails = [ 'Designed and built a full-stack Spring Boot application for users to search twitch resources(stream/video/clip) and get recommendations.Built a web page with rich + user friendly experience using React and Ant Design.',
        'MySQL database hosted on AWS RDS, CRUD operations with Spring Data JDBC.Implemented RESTful controller APIs, retrieved real Twitch resources using Twitch API with Spring declarative HTTP client.',
        'Support register/login/logout with Spring Security.Explored multiple recommendation algorithms and extracted game information from Twitch resources to implement a Content-based algorithm based on favorite collection.',
        'Spring Boot Caching with Caffine. Unit tests. Containerized application depolyed to AWS app Runner.'];

        this.projectUrl ='https://ihzik7jnuw.us-west-2.awsapprunner.com/';
        this.githubLink ='https://github.com/AAbiAbi/RecommendTwitch';
        break;

        case 'starlink':
          this.projectTitle = 'Starlink';
          this.projectDescription = 'A React JS Based Starling Trajectory Visualization';
          this.projectDetails = [ 'Developed a visualization dashboard using ReactJS and D3 to track satellites in real-time based in geo-location.',
          'Built location, altitude, and duration based selector to refine satellite search.',
          'Animated selected satellite paths on a world map using D3 to improve the used friendliness.',
          'Deployed the dashboard to Amazon Web Service for demonstration.          '];
        break;

        case 'nubestore':
          this.projectTitle = 'NubeStore';
          this.projectDescription = 'A Cloud and React base App Purchase Platform';
          this.projectDetails = [ 'Built a software/application purchase platform and support Stripe checkout(REST API).',
          'Implemented frontend features for users to create and browse software and support search software with React and AntD.',
          'Used JWT for token-based authentication and authorization.',
          ' Delivered a Golang base web service and ElasticSearch to handle requests and return responses.',
          'Deployed the whole application to Google Cloud(Google App Engine, Google Compute Engine).',];
        break;

        case 'nftprice':
          this.projectTitle = 'NFT Price Visualization (React ,JS, AntD, Rechart, MoralisApi)';
          this.projectDescription = '';
          this.projectDetails = [ 'Built a NFT dashboard to search and view and analyze NFT assets.',
          'Leveraged Antd UI Component Library to boost client side development.',
          'Utilized Moralis NFT API to fetch NFT relevant data(price, name, description etc).',
          'Generated NFT trade/price chart UI with recharts.',
          ];
        break;

        case 'litespotify':
          this.projectTitle = 'LiteSpotify';
          this.projectDescription = 'A Kotlin Spotify favorite app by leveraging Android Jetpack Library and Hilt Dependency Injection';
          this.projectDetails = [ 'Implemented the BottomBar & App Navigation using Jetpack Navigation component.',
          'Created a mock RESTFUL Api json-server and used the Retrofit to handle requests.',
          'Built the feed/album/favorite UI Jetpack Compose following MVVM architecture.',
          'Enable the local cache ability for favorite feature by using Room Database.',
          'Integrated the Google Exoplayer to handle the global music playback.'
          ];
        break;

        case 'littleprince':
          this.projectTitle = 'Little Prince';
          this.projectDescription = 'A Roblox game';
          this.projectDetails = [ 'Developed a Roblox game narrating the adventure story of Little Prince and his fox using Lua.',
          'Implemented falling transition feature and portal using touching brick trigger location change. ',
          'Utilized Sound and Music Functions API support touch sound and BGM adapted to different scenarios.',
          'Designed algorithm for scope and distance to initialize the monster travelling and pet following feature.',
          'Implemented NPCs interactive behavior(communication, itemgain etc). Initialized HP bar and weapon attack system . '
          ];
        break;

        


      default:
        // Handle unknown project IDs, perhaps redirect or show an error
    }
  }
}