import React,{useState,useRef,useEffect} from 'react'
import {Tabs,FormContainer,FormItem,Input,DatePicker, Button} from 'components/ui'
import _ from 'lodash'




const {TabNav, TabList, TabContent} = Tabs;









function HeaderCard() {


    const [formvalue,setformvalue] = useState({
        daerah: false,

    })


    const [invalid,setinvalid] = useState(true)

    const date2 = useRef();


    useEffect(() => {
        // console.log(date2.current.value)
    })


    const onSubmit = e => {
        e.preventDefault()
        _.forEach(e.target,(f,i) => console.log(f[i].value))
    }


  return (
    <div >
        <Tabs defaultValue='Search'>
            <TabList >
                <TabNav  value='Search'> Search </TabNav>
                <TabNav value='Filter'> Filter </TabNav>
            </TabList>
            <div className='p-6' >
            <TabContent  value='Search' >
                <div className='flex justify-center' >
                    <p className='text-center' >
                        <form onSubmit={onSubmit} >
                        <FormContainer  >
                          
                            <FormItem 
                                // label='Datang'
                                size='md'
                            >
                                <Input 
                                    name='daerah'
                                    className=''
                                    invalid={formvalue.daerah}
                                    placeholder="Daerah Penginapan"
                                />
                            </FormItem>


                            <div className="my-2 flex flex-row justify-center ">
                                <FormItem 
                                    label='Datang'
                                    size='md'
                                >

                                    <DatePicker 
                                        name='datang'
                                        clearable
                                        placeholder="Check In "

                                    />
                                </FormItem>
                                <span  ></span>

                            
                            
                                <FormItem 

                                    label='Pulang'
                                    size='md'
                                    className='ml-2'
                                >

                                    <DatePicker 
                                        name='pulang'
                                        clearable
                                        placeholder="Check Out "

                                    />
                                </FormItem>
                            </div>
                            
                            <Button type='submit' variant='solid' block  >
                                Cari
                            </Button>
                                
                        </FormContainer>
                        </form>
                    </p>
                </div>
            </TabContent>
            <TabContent value='filter' >

            </TabContent>
            </div>

        </Tabs>

    </div>
  )
}

export default HeaderCard