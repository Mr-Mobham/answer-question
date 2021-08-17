const addQuestion = (state={
    Items:[
        {
            id      : 1,
            title   : 'مشکل در auth',
            subject : 'هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس',
            avatar  : 'images.jpg',
            countAnswer : '1',
        },
        {
            id      : 2,
            title   : 'مشکل در auth',
            subject : 'هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس',
            avatar  : 'images.jpg',
            countAnswer : '2',
        },
        {
            id      : 3,
            title   : 'مشکل در auth',
            subject : 'هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس',
            avatar  : 'images.jpg',
            countAnswer : '3',
        },
    ],
    formData : {
        subject     : '',
        title       : '',
        avatar      : "images.jpg",
        id          : 0,
        countAnswer : 0,
    },
    idStaticCreateQuestion : 10,
    showModalAddComment    : false,
},action) => {

    switch (action.type) {
           case 'ADD-QUESTION':
               const payload                    = action.payload;
               const question                   = {...payload};
               let findLastIdQuestion;
               let idStaticCreateQuestion;

               const clearFormData = () => {
                   const formData   = state.formData;
                   formData.title   = '';
                   formData.subject = '';
                }

                const addQuestionData = () => {
                    if (state.Items.length === 0) {
                        findLastIdQuestion         = state.idStaticCreateQuestion;
                    }
                    else{
                         findLastIdQuestion         = state.Items[state.Items.length - 1].id;
                    }
    
                    
                     state.idStaticCreateQuestion     = findLastIdQuestion;
                     idStaticCreateQuestion           = state.idStaticCreateQuestion + 1;
                     question.id                      = idStaticCreateQuestion;
                     state.Items.push(question)
                }

            
                
                addQuestionData();
                clearFormData();

               return {
                   ...state,
                   idStaticCreateQuestion : idStaticCreateQuestion,
                   Items: state.Items,
                   showModalAddComment : false,
               };

               case 'SHOW-MODALCOMMENT':          
                return {
                   ...state,
                   showModalAddComment : action.payload,
                };


        default : 
        return state;
     
    }
}


export default addQuestion;