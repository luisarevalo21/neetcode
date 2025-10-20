//debug why the get newsfeed is 6,5 when it should be just 5
//pribbaly because of the unfloower follow flow
//finding ones when pushing the users followers tweets i pushing and copying it directly. into the the users hashmap arrray whih would duplicate it
//next when pushing a new follower if the follower exisited i would push it twice
//added a check if it exisited don't push it only new followers are added.

//another note was when creating post tweet i used an array but tried to create an object but didnt work
//when i tried mapping through all the tweets and getting the tweet id should try again?

class Twitter {
  followersTable = new Map();
  followersTweetsTable = new Map();
  counter: number = 0;
  constructor() {
    //use a map to store who follows who on O(1)
    //as the follower to the flowee will be an array for quick access
    //if they don't exist

    //followers is userId=> to followeeId as a list
    const followersTable = new Map();
    let counter = 0;
    //followerstweets table will be an id mapped to
    //
    const followersTweetsTable = new Map();
  }

  postTweet(userId: number, tweetId: number): void {
    const followersTweets = this.followersTweetsTable.get(userId) || [];
    const counter = ++this.counter;

    // console.log("user", userId)
    followersTweets.push([counter, tweetId]);
    this.followersTweetsTable.set(userId, followersTweets);
  }

  getNewsFeed(userId: number): number[] {
    //needs to be sorted by the counte
    const maxHeap = new MaxHeap(count => count[0]);

    //get the users feed, first by getting their tweets
    // console.log('this.followersTweetsTable', this.followersTweetsTable)

    const curUsersTweets = this.followersTweetsTable.get(userId) ? [...this.followersTweetsTable.get(userId)] : [];

    // console.log("cur users tweets", curUsersTweets)
    //get the current users followers table
    // console.log(this.followersTable)
    const curUsersFollowers = this.followersTable.has(userId) ? this.followersTable.get(userId) : [];

    // console.log("curUsersFollowers inside get news feed", curUsersFollowers)
    //for all the users get their tweets
    //add to curUserTweets

    // console.log('curUsersFollowers', curUsersFollowers)
    if (curUsersFollowers.length > 0) {
      for (let follower of curUsersFollowers) {
        const currentFollowersTweets = this.followersTweetsTable.get(follower)
          ? this.followersTweetsTable.get(follower)
          : [];
        curUsersTweets.push(...currentFollowersTweets);
      }
    }

    // console.log("maxHeap", maxHeap.toArray())
    curUsersTweets.forEach(tweet => maxHeap.insert(tweet));
    // maxHeap.push(curUsersTweets)
    //pop k times

    const curUsersNewsFeed = [];
    let i = 0;
    while (i < 10 && maxHeap.size() > 0) {
      // console.log('maxhea', maxHeap.toArray())
      const tweet = maxHeap.pop();
      // console.log('tweet', tweet[1])
      curUsersNewsFeed.push(tweet[1]);
      i++;
    }

    return curUsersNewsFeed;
  }

  follow(followerId: number, followeeId: number): void {
    const curUsersFollowers = this.followersTable.has(followerId) ? this.followersTable.get(followerId) : [];
    if (!curUsersFollowers.includes(followeeId)) {
      curUsersFollowers.push(followeeId);
    }
    this.followersTable.set(followerId, curUsersFollowers);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.followersTable.has(followerId)) {
      const followers = this.followersTable.get(followerId);
      const filteredFollowers = followers.filter(id => id !== followeeId);

      this.followersTable.set(followerId, filteredFollowers);

      // console.log("this followerstable after unfollow", this.followersTable)
    }
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
