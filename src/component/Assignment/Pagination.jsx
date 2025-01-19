import {Pagination} from "@heroui/react";

 function Paginations() {
  return <Pagination loop showControls color="danger" initialPage={1} total={10} />;
}
export default Paginations;