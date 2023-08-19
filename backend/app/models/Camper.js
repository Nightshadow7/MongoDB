import mongoose from "mongoose";
import {Schema} from 'mongoose';

const entrevistaSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
    },
    Sexo:{
      type: String,
      required: [true, 'El sexo es Obligatorio'],
    },
    Telefono:{
      type: Number,
      required: [true, 'El telefono es Obligatorio'],
      trim:true
    },
    Edad:{
      type: Number,
      required: [true, 'El edad es Obligatorio'],
    },
    FechaNacimiento:{
      Año:{
        type: Number,
        required: true,
      },
      Mes:{
        type: Number,
        required: true,
      },
      Dia:{
        type: Number,
        required: true
      }
    },
    Documento:{
      type: Number,
      required: [true, 'El documento es Obligatorio'],
      unique: true
    },
    Psicologa:{
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
      required: [true, "Seleccione al menos una Psicologa"]
    },
    Imagen:{
      type: String,
      required: false,
    },
    Entrevista:{
      Datos:{
        Fecha:{
          type: Date,
          required: false,
          default: new Date()
        },
        Hora:{
          type: String,
          required: false,
        },
        Grupo:{
          type: Schema.Types.ObjectId,
          ref: 'grupos',
          required: false,
        },
        LugarResidencia:{
          type: String,
          required: false,
        },
        LugarProcedencia:{
          type: String,
          required: false,
        }
      },
      Familiares:{
        Hijos:{
          type: Boolean,
          required: false,
        },
        TotalFamiliares:{
          type: Number,
          required: false,
        },
        familiares:[{
          Nombre:{
            type: String,
            required: false,
          },
          Parentezco:{
            type: Schema.Types.ObjectId,
            ref: 'parentezcos',
            required: false,
          },
          Convivencia:{
            type: Boolean,
            required: false,
          }
        }]
      },
      AjustarSer:{
        AreaPersonal:{
          type: String,
          required: false
        },
        AreaFamiliar:{
          type: String,
          required: false
        },
        AreaAfectiva:{
          type: String,
          required: false
        },
        AreaSocial:{
          type: String,
          required: false
        },
        AreaSomatica:{
          type: String,
          required: false
        },
        AreaEconomica:{
          type: String,
          required: false,
        },
        AreaEducativa:{
          type: String,
          required: false,
        }
      },
      Metas:{
        CortoPlazo:{
          type: String,
          required: false
        },
        MedianoPlazo:{
          type: String,
          required: false
        },
        LargoPlazo:{
          type: String,
          required: false
        }
      },
      Caracteristicas:{
        HabilidadesSer:{
          type: String,
          required: false
        },
        HabilidadesHacer:{
          type: String,
          required: false
        },
        Ajustes:{
          type: String,
          required: false
        }
      },
      Tiempo:{
        Pasado:{
          type: String,
          required: false
        },
        Presente:{
          type: String,
          required: false
        },
        Futuro:{
          type: String,
          required: false
        }
      },
      Perfil:{
        SeguimientoPsicologico:{
          type: Boolean,
          required: false
        },
        PerfilPsicologico:{
          type: String,
          required: false
        }
      }
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
const Camper = mongoose.model( 'campers' , entrevistaSchema );

export default Camper;


//Nombre , Sexo , Imagen , Telefono , Edad , FechaNacimiento , Documento , Psicologa , Email , Password , Fecha ,	Hora ,	Grupo , LugarResidencia ,	LugarProcedencia ,	Hijos ,	TotalFamiliares	, Convivencia , Famiiliares	,	AreaPersonal ,	AreaSomatica ,	AreaFamiliar ,	AreaEconomica ,	AreaAfectiva ,	AreaEducativa ,	AreaSocial ,	MetasCortoPLazo ,	MetasMedianoPlazo ,	MetasLargoPlazo ,	HabilidadesSer ,	HabilidadesHacer ,	Ajustes ,	Pasado ,	Presente ,	Futuro , 	SeguimientoPsicologico ,	PerfilPsicologico ,	Activo ,Asistencia ,	Notas	,	MesCumpleaños