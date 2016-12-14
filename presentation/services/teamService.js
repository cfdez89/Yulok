/*
 *Yulok app
 *By Carlos Fernandez Jimenez
 *Service 
 */

(function() {
    'use strict';
    angular
        .module('yulok')
        .factory('teamService', teamService);

    teamService.$inject = ['requestService', 'API_URL'];

	function teamService(requestService, API_URL) { 

       

        var getAllTeams = function(){
            var url = '/Servidor/equipos.php';

            return  requestService.retrieve(url).then(function(pResp){
                        return pResp.data; 
                    },  
                    function(pResp){
                        return pResp.data;   
                    });
        };

        var getTeamById = function(pId){
            var url = '/Servidor/equipo.php';
            
            var data = {
                id:pId
            }

            return  requestService.create(url, data).then(function(pResp){
                        return pResp.data;
                    },
                    function(pResp){
                        return pResp.data;
                    });
        };

        var getImageById = function(pId){
                    var url = '/Servidor/get_imagenes_equipo.php';
                    
                    var data = {
                        id:pId
                    }

                    return  requestService.create(url, data).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };
               
                var deleteImageById = function(pId){
                    var url = '/Servidor/eliminar_imagenes_equipo.php';
                    
                    var data = {
                        id:pId
                    }

                    return  requestService.create(url, data).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };
                
                var getVideoById = function(pId){
                    var url = '/Servidor/getVideos.php';
                    
                    var data = {
                        id:pId
                    }

                    return  requestService.create(url, data).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };
                
                var deleteVideoById = function(pData){
                    var url = '/Servidor/eliminar_videos_equipo.php';

                    return  requestService.create(url, pData).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };

                var getContactById = function(pId){
                    var url = '/Servidor/get_info_contacto.php';
                    
                    var data = {
                        id:pId
                    }

                    return  requestService.create(url, data).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };


                var addVideo = function(pData){
                    var url = '/Servidor/guardar_videos.php';

                    return  requestService.create(url, pData).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };

                var sendNewTeam = function(pData){
                    var url = '/Servidor/crear_equipo.php';

                    return  requestService.create(url, pData).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };

                var sendContact = function(pData){
                    var url = '/Servidor/actualizar_info_contacto.php';

                    return  requestService.create(url, pData).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };


                var sendUpdateTeam = function(pData){
                    var url = '/Servidor/actualizar_info_equipo.php';

                    return  requestService.create(url, pData).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };

                var sendUpdateContact = function(pData){
                    var url = '/Servidor/actualizar_info_contacto.php';

                    return  requestService.create(url, pData).then(function(pResp){
                                return pResp.data;
                            },
                            function(pResp){
                                return pResp.data;
                            });
                };


		
        return {
            allTeams: function(){
                return getAllTeams();             
            },
            getTeam: function(pId){
                return getTeamById(pId);
            },
            getImages: function(pId){
                return getImageById(pId);
            },
            deleteImage: function(pId){
                return deleteImageById(pId);
            },
            getVideos: function(pId){
                return getVideoById(pId);
            },
            deleteVideo: function(pData){
                return deleteVideoById(pData);
            },
            getContact: function(pId){
                return getContactById(pId);
            },
            saveVideo: function(pData){
                return addVideo(pData);
            },
            newTeam: function(pData){
                return sendNewTeam(pData);
            },
            addContact: function(pData){
                return sendContact(pData);
            },
            updateTeam: function(pData){
                return sendUpdateTeam(pData);
            },
            updateContact: function(pData){
                return sendUpdateContact(pData);
            }     
        };   
    };

})();