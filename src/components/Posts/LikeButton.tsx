import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_POST } from "../../utils/mutations";

const LikeButton = ({ user, post: { id, likeCount, likes } }: any) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (likes.find((like: any) => like.username === user.username))
      setLiked(true);
    else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      postId: id,
    },
  });

  const likePostClick = () => {
    likePost();
  };
  return (
    <Button
      icon="like"
      label={{
        basic: !liked,
        content: likeCount,
      }}
      basic={!liked}
      onClick={likePostClick}
    />
  );
};

export default LikeButton;
