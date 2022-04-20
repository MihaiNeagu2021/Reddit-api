export interface PostData{
    data:{
        title:string;
        thumbnail:string;
        subreddit_name_prefixed:string;
        permalink:string;
    }
    }
    

export interface RedditResponse{
  data: {
    after: string;
    children: Array<PostData>;
  };
}

