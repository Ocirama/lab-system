package lt.ocirama.labsystem.repositories.local;

import lt.ocirama.labsystem.model.entities.local.GeneralMoistureEntity;
import lt.ocirama.labsystem.model.entities.local.SampleEntity;
import lt.ocirama.labsystem.model.entities.local.TrayEntity;
import netscape.security.UserTarget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.Date;
import java.util.List;

public interface GeneralMoistureRepository extends Repository<GeneralMoistureEntity, Integer> {

    List<GeneralMoistureEntity> findAll();

    GeneralMoistureEntity findOneById(Integer id);

    GeneralMoistureEntity save(GeneralMoistureEntity sample);

    void deleteById(Integer id);

    @Query(value = "select oe.samples  from OrderEntity oe where oe.protocolId=:protocol")
    List<SampleEntity> findAllByProtocol(String protocol);

    @Query(value="Select te from TrayEntity te where te.trayId=:padeklas AND te.date=:current_date")
    TrayEntity findByTrayAndDate(String padeklas, Date current_date);
}
