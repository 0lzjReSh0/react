
import { Box } from 'grommet';
const AmountBox=({text,type,amount})=> {
    return (
        <Box direction="column" pad="small" align='center'>
                <Box pad="small" border='bottom'>
                    {text}
                </Box>
                <Box pad="small" >
                    {amount}
                </Box>
        </Box>
    );
}
export default AmountBox;