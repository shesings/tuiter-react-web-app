const NavigationSidebar = (active) => {
    return (`
       <div class="list-group">
         <a class="list-group-item" href="#">
           <i class="fab fa-twitter"></i></a>     
         <a id="checkActiveHome" class="${active === 'home' ? 'active': ''} list-group-item" href="../HomeScreen/index.html">
            <i class="fa fa-home"></i> Home</a>   
         <a class="list-group-item" class="${active === 'explore' ? 'active': ''} list-group-item" href="../ExploreScreen/index.html">
           <i class="fa fa-hashtag"></i> Explore</a> 
         <a class="list-group-item" href="#">
           <i class="fa fa-bell"></i> Notifications</a>
         <a class="list-group-item" href="#">
           <i class="fa fa-envelope"></i> Messages</a>
         <a class="list-group-item" href="#">
           <i class="fa fa-bookmark"></i> Bookmarks</a>    
         <a class="list-group-item" href="#">
           <i class="fa fa-list"></i> Lists</a>  
         <a class="list-group-item" href="#">
           <i class="fa fa-user"></i> Profile</a>  
         <a class="list-group-item" href="#">
           <span class="fa-stack small">
                <i class="fa fa-circle fa-stack-2x stack-item"></i>
                <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse stack-item"></i>
           </span>
           More
         </a>  
       </div>
       <div class="d-grid mt-2">
         <a href="../tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
       </div> 
`);
}
export default NavigationSidebar;