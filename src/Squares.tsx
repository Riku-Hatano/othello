import { Grid } from "@mui/material";

const cellSize = {
  xs: "30px",
  sm: "35px",
  md: "50px",
  lg: "60px",
};
const discSize = {
  xs: "28px",
  sm: "33px",
  md: "48px",
  lg: "58px",
};
const BaseCell = (props: any) => {
  const { children, onClick, id, id2, info, info2, info3 } = props;
  return (
    <Grid
      item
      sx={{
        backgroundColor: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: {
          xs: cellSize.xs,
          sm: cellSize.sm,
          md: cellSize.md,
          lg: cellSize.lg,
        },
        height: {
          xs: cellSize.xs,
          sm: cellSize.sm,
          md: cellSize.md,
          lg: cellSize.lg,
        },
      }}
      onClick={() => onClick(id, id2, info, info2, info3)}
    >
      {children}
    </Grid>
  );
};
const Disk = ({ color }: any) => {
  return (
    <Grid
      sx={{
        backgroundColor: color,
        borderRadius: "50%",
        width: {
          xs: discSize.xs,
          sm: discSize.sm,
          md: discSize.md,
          lg: discSize.lg,
        },
        height: {
          xs: discSize.xs,
          sm: discSize.sm,
          md: discSize.md,
          lg: discSize.lg,
        },
      }}
    />
  );
};
export const Cell = (props: any) => {
  switch (props.id3) {
    case "W":
      return (
        <BaseCell {...props}>
          <Disk color="white" />
        </BaseCell>
      );
    case "B":
      return (
        <BaseCell {...props}>
          <Disk color="black" />
        </BaseCell>
      );
    default:
      return <BaseCell {...props} />;
  }
};
