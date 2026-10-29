import { Skeleton } from "@mantine/core";

const GameCardSkeleton = () => {
  return (
    <div className="rounded-lg border p-4">
      <Skeleton height={192} radius="md" /> {/* img */}
      <Skeleton height={24} width="70%" mt="md" /> {/* title */}
      <Skeleton height={16} width="35%" mt="sm" /> {/* rating */}
      <Skeleton height={16} width="85%" mt="sm" /> {/* genres */}
      <div className="mt-4 flex justify-between">
        <Skeleton height={16} width={72} /> {/* platfor icons */}
        <Skeleton height={28} width={28} circle /> {/* critic score */}
      </div>
    </div>
  );
};

export default GameCardSkeleton;
