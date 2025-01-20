import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@heroui/react";

 function Upcoming({title,icon,time}) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[440px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          {icon}
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{title}</h4>
            <h5 className="text-small tracking-tight text-default-400">{time}</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Join" : "Joining"}
        </Button>
      </CardHeader>
     
    </Card>
  );
}
export default  Upcoming;
