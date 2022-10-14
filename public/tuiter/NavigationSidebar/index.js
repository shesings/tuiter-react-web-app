const NavigationSidebar = () => { return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="#">
       <i class="fa fa-home"></i> Home</a> 
     <a class="list-group-item" href="#">
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
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
</div> `);
}
export default NavigationSidebar;