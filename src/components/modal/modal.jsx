import { React, forwardRef } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

const style = {
    flex: 1,
    position: 'relative',
    top: { xs: '40%', md: '30%' },
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', md: '38%' },
    height: { xs: 560, md: 400 },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};
const ModalCreate = forwardRef(({ open, handleClose, ...other }, ref) => (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style} xs={12} >
            <Button onClick={handleClose} sx={{
                position: 'absolute', right: 40, borderRadius: 35,
                backgroundColor: "#fff",
                color: '#000'
            }}
            >
                <Iconify icon="ic:baseline-close" />
            </Button>
            <Box sx={{ display: 'inline-flex' }}>
                <Iconify icon="ion:people" mt={0.5} mr={1} />
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 3 }}>
                    Tạo mới người dùng
                </Typography>
            </Box>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <TextField id="outlined-basic-1" label="Họ và tên lót" variant="outlined" size="small" sx={{ width: '96%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="outlined-basic-2" label="Tên" variant="outlined" size="small" sx={{ width: '96%' }} />
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                    <TextField id="outlined-basic-2" label="Địa chỉ" variant="outlined" size="small" sx={{ width: '96%' }} />
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                    <TextField id="outlined-basic-2" label="Số điện thoại" variant="outlined" size="small" sx={{ width: '96%' }} type='number' />
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                    <TextField id="outlined-basic-2" label="Email" variant="outlined" size="small" sx={{ width: '96%' }} type='email' />
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                    <TextField id="outlined-basic-2" label="Password" variant="outlined" size="small" sx={{ width: '96%' }} type='password' />
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                    <Button
                        variant="contained"
                        component="label"
                        startIcon={<Iconify icon="clarity:avatar-solid" />}
                    >
                        Tải hình đại diện
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </Grid>
            </Grid>
            <Box spacing={3} sx={{ right: 50, position: 'absolute' }}>
                <Button variant="contained" component="label" color="grey" sx={{ mr: 1 }} startIcon={<Iconify icon="mdi:remove" />} onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="contained" component="label" startIcon={<Iconify icon="material-symbols:save-outline" />}>
                    Lưu
                </Button>
            </Box>
        </Box>
    </Modal>
));


export default ModalCreate;
